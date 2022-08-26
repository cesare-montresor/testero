package it.univr.di.testero.api.input;

/*
input AddDomandaData{
    nome: String!
    testo: String!
    punti: Float!
    ordineCasuale: Boolean!
    risposteConNumero: Boolean!
    risposte: [AddRispostaData]!
}

*/

import java.util.List;

public class AddDomandaData {
    public String nome;
    public String testo;
    public String punti;
    public Boolean ordineCasuale;
    public Boolean risposteConNumero;
    public List<AddRispostaData> risposte;
}
