package it.univr.di.testero.services;

import it.univr.di.testero.model.Compilazione;
import it.univr.di.testero.model.CompilazioneRisposta;
import it.univr.di.testero.model.Test;
import it.univr.di.testero.model.User;

import java.util.List;

public interface IStudentService {
    List<Test> allTests();
    Compilazione takeTest(Long testId, User user);
    CompilazioneRisposta giveAnswer(Long idCompilazione, Long idDomanda, Long idRisposta);
}
