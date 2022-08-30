package it.univr.di.testero.services;

import it.univr.di.testero.api.input.AddDomandaData;
import it.univr.di.testero.api.input.AddTestData;
import it.univr.di.testero.model.Domanda;
import it.univr.di.testero.model.Risposta;
import it.univr.di.testero.model.Test;

public interface IProfessorService {
    Test addTest(String nome, Boolean ordineCasuale, Boolean domandeConNumero);
    Domanda addQuestion(String nome, String testo, Float punti, Boolean ordineCasuale, Boolean risposteConNumero);
    Risposta addAnswerToQuestion(String testo, Float punteggio, Domanda domanda);
    Domanda findQuestion(Long questionId);
}
