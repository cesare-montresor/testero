package it.univr.di.testero.api.output;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

public class Result {
    @Getter @Setter
    private String testoDomanda;
    @Getter @Setter
    private Float puntiDomanda;
    @Getter @Setter
    private Boolean risposteConNumero;
    @Getter @Setter
    private String selectedTestoRisposta;
    @Getter @Setter
    private Float selectedRispostaPunteggio;
    @Getter @Setter
    private List<String> correctTestoRispostaList = new ArrayList<>();

    public Result(String testoDomanda, Float puntiDomanda, Boolean risposteConNumero, String selectedTestoRisposta, Float selectedRispostaPunteggio, List<String> correctTestoRispostaList) {
        this.testoDomanda = testoDomanda;
        this.puntiDomanda = puntiDomanda;
        this.risposteConNumero = risposteConNumero;
        this.selectedTestoRisposta = selectedTestoRisposta;
        this.selectedRispostaPunteggio = selectedRispostaPunteggio;
        this.correctTestoRispostaList = correctTestoRispostaList;
    }
}
