package it.univr.di.testero.services;

import it.univr.di.testero.model.*;

import java.util.List;

public interface IStudentService {
    List<Test> allTests();
    Test findTest(Long testId);
    Domanda findQuestion(Long questionId);
    Risposta findAnswer(Long answerId);
}
