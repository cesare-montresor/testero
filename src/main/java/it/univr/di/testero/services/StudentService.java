package it.univr.di.testero.services;

import graphql.GraphQLException;
import it.univr.di.testero.model.*;
import it.univr.di.testero.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService implements IStudentService{
    @Autowired
    private TestRepository testRepository;
    @Autowired
    private DomandaRepository domandaRepository;
    @Autowired
    private RispostaRepository rispostaRepository;

    @Override
    public List<Test> allTests(){
        return testRepository.findAll();
    }

    @Override
    public Test findTest(Long testId){
        Optional<Test> result = testRepository.findById(testId);

        if(result.isEmpty()){
            return null;
        }

        return result.get();
    }

    @Override
    public Domanda findQuestion(Long domandaId){
        Optional<Domanda> result = domandaRepository.findById(domandaId);

        if(result.isEmpty()){
            return null;
        }

        return result.get();
    }

    @Override
    public Risposta findAnswer(Long answerId){
        Optional<Risposta> result = rispostaRepository.findById(answerId);

        if(result.isEmpty()){
            return null;
        }

        return result.get();
    }
}
