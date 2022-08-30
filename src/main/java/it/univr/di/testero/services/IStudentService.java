package it.univr.di.testero.services;

import it.univr.di.testero.model.Compilazione;
import it.univr.di.testero.model.CompilazioneRisposta;
import it.univr.di.testero.model.User;

public interface IStudentService {
    Compilazione takeTest(Long testId, User user);
    CompilazioneRisposta giveAnswer(Long idCompilazione, Long idDomanda, Long idRisposta);
}
