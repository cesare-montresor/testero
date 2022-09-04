import { GraphQLClient, gql } from 'graphql-request'

class TesteroSDK {
    constructor(){
        this.endpoint = 'http://localhost:8080';
        this.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        };
        this.client = new GraphQLClient(this.endpoint + '/graphql' );
    }


    request( query, vars ) {
        this.client.setHeaders(this.headers);
        return this.client.request(query, vars);
    }

    addTest(nome, ordineCasuale, domandeConNumero){
        const query = gql`
            mutation addTest($input: AddTestData!) {
                addTest(input: $input) {
                    id, nome
                }
            }`;

        const vars = {
            "input": {
                "nome": nome,
                "ordineCasuale": ordineCasuale,
                "domandeConNumero": domandeConNumero
            }
        };

        return this.request(query, vars);
    }

    getUser(){
        const query = gql`
            query {
                getUser{
                    id, username, name, roles, active
                }
            }`;

        return this.request(query);
    }

    allTests(){
        const query = gql`
            query {
                allTests{
                    id, nome, data, ordineCasuale, domandeConNumero, domande{testo}
                }
            }`;

        return this.request(query);
    }

    takeTest(idTest){
        const query = gql`
            mutation takeTest($input: Int!) {
                takeTest(input: $input){
                    test{
                        id, nome, domandeConNumero,
                        domande {
                            id, nome, testo, risposteConNumero, ordineCasuale,
                            risposte {
                                id, testo
                            }
                        }
                    }
                    compilazione {
                        id, compilazioniRisposte {
                            domanda, risposta
                        } 
                    }
                }
            }`;

        const vars = {
            "input": idTest
        };

        return this.request(query, vars);
    }

    giveAnswer(idCompilazione, idDomanda, idRisposta){
        const query = gql`
            mutation giveAnswer($input: GiveRispostaData!) {
                giveAnswer(input: $input) {
                    id
                }
            }`;

        const vars = {
            "input": {
                "idCompilazione": idCompilazione,
                "idDomanda": idDomanda,
                "idRisposta": idRisposta
            }
        };

        return this.request(query, vars);
    }

    addQuestion(testId, nome, testo, punti, ordineCasuale, risposteConNumero, risposte ){
        const query = gql`
            mutation addQuestion($input: AddDomandaData!) {
                addQuestion(input: $input) {
                    id
                    alreadyExists
                }
            }`;

        const vars = {
            "input": {
                "testId": testId,
                "nome": nome,
                "testo": testo,
                "punti": punti,
                "ordineCasuale": ordineCasuale,
                "risposteConNumero": risposteConNumero,
                "risposte": risposte
            }
        };

        return this.request(query, vars);
    }
}


const TesteroAPI = new TesteroSDK();

export { TesteroAPI };
