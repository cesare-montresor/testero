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
};

export { TesteroAPI }