import { GraphQLClient, gql } from 'graphql-request'

class TesteroAPI {
    constructor(){
        this.endpoint = 'http://localhost:8080/graphql';
        this.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        };
        this.client = new GraphQLClient(this.endpoint);
        this.client.setHeaders(this.headers);
    }

    fetch( query, vars ) {
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

        return this.fetch(query, vars);
    }

    getUser(){
        const query = gql`
            query {
                getUser{
                    id, username, name, roles, active
                }
            }`;

        return this.fetch(query);
    }

    allTests(){
        const query = gql`
            query {
                allTests{
                    id, nome, data, ordineCasuale, domandeConNumero
                }
            }`;

        return this.fetch(query);
    }

    takeTest(idTest){
        const query = gql`
            mutation takeTest($input: Int!) {
                takeTest(input: $input){
                    test{
                        nome
                    }
                    compilazione {
                        id
                    }
                }
            }`;

        const vars = {
            "input": idTest
        };

        return this.fetch(query, vars);
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

        return this.fetch(query, vars);
    }

    addQuestion(nome, testo, punti, ordineCasuale, risposteConNumero, risposte ){
        const query = gql`
            mutation addQuestion($input: AddDomandaData!) {
                addQuestion(input: $input) {
                    id
                }
            }`;

        const vars = {
            "input": {
                "nome": nome,
                "testo": testo,
                "punti": punti,
                "ordineCasuale": ordineCasuale,
                "risposteConNumero": risposteConNumero,
                "risposte": risposte
            }
        };

        return this.fetch(query, vars);
    }

};

export { TesteroAPI }