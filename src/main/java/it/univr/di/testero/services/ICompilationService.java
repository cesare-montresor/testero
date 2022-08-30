package it.univr.di.testero.services;

import it.univr.di.testero.model.*;

public interface ICompilationService {
    Compilazione takeTest(Long testId, Long userId);
    CompilazioneRisposta giveAnswer(Long compilazioneId, Long domandaId, Long rispostaId);
}
