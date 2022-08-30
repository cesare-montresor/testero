package it.univr.di.testero.services;

import it.univr.di.testero.model.*;

public interface ICompilationService {
    Compilazione takeTest(Test test, User user);
    CompilazioneRisposta giveAnswer(Long idCompilazione, Domanda domanda, Risposta risposta);
}
