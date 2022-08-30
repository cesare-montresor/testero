package it.univr.di.testero.services;

import graphql.GraphQLException;
import it.univr.di.testero.api.input.AddDomandaData;
import it.univr.di.testero.api.input.AddRispostaData;
import it.univr.di.testero.api.input.AddTestData;
import it.univr.di.testero.model.Domanda;
import it.univr.di.testero.model.Risposta;
import it.univr.di.testero.model.Test;
import it.univr.di.testero.repository.CompilazioneRepository;
import it.univr.di.testero.repository.DomandaRepository;
import it.univr.di.testero.repository.RispostaRepository;
import it.univr.di.testero.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.time.Instant;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.util.List;
import java.util.Optional;

@Service
public class ProfessorService implements IProfessorService{
    @Autowired
    private TestRepository testRepository;
    @Autowired
    private DomandaRepository domandaRepository;
    @Autowired
    private RispostaRepository rispostaRepository;

    @Override
    public Test addTest(String nome, Boolean ordineCasuale, Boolean domandeConNumero){
        Test t = new Test(OffsetDateTime.ofInstant(Instant.now(), ZoneOffset.UTC), nome, ordineCasuale, domandeConNumero);
        return testRepository.save(t);
    }

    @Override
    public Domanda addQuestion(String nome, String testo, Float punti, Boolean ordineCasuale, Boolean risposteConNumero){
        Domanda domanda = new Domanda(nome, testo, punti, ordineCasuale, risposteConNumero);
        domanda = domandaRepository.save(domanda);
        return domanda;
    }

    @Override
    public Risposta addAnswerToQuestion(String testo, Float punteggio, Domanda domanda){
        return rispostaRepository.save(new Risposta(testo, punteggio, domanda));
    }

    @Override
    public Domanda findQuestion(Long questionId){
        Optional<Domanda> result = domandaRepository.findById(questionId);

        if(result.isEmpty()){
            return null;
        }

        return result.get();
    }
}
