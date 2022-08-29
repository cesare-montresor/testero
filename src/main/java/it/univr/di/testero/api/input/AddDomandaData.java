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

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
public class AddDomandaData {
    @Setter @Getter
    private String nome;
    @Setter @Getter
    private String testo;
    @Setter @Getter
    private Float punti;
    @Setter @Getter
    private Boolean ordineCasuale;
    @Setter @Getter
    private Boolean risposteConNumero;
    @Setter @Getter
    private List<AddRispostaData> risposte;
}
