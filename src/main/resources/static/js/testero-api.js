import { createClient, gql } from 'urql';



class TesteroAPI {
    constructor(){
        this.endpoint = 'http://localhost:8080/graphql';
        this.client = new createClient(this.endpoint);
        this.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        };
    }

    async fetch( query, vars ) {
        return await this.client.request(query, vars, this.headers);
    }

    addTest(nome, ordineCasuale, domandeConNumero){
        const input = {
            nome: "Test K",
            ordineCasuale: false,
            domandeConNumero: true
        }

        const query = gql`
            mutation addTest($input: AddTestData!) {
                id
            }
        `;
        const vars = {
            "input":{
                "nome": nome,
                "ordineCasuale": ordineCasuale,
                "domandeConNumero": domandeConNumero
            }
        };

        return this.fetch(query,gql);
    }
};

export { TesteroAPI }