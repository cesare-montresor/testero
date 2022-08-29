package it.univr.di.testero.api;

import graphql.GraphQLException;
import graphql.GraphqlErrorException;
import it.univr.di.testero.api.input.AddDomandaData;
import it.univr.di.testero.api.input.AddRispostaData;
import it.univr.di.testero.api.input.AddTestData;
import it.univr.di.testero.model.Domanda;
import it.univr.di.testero.model.Risposta;
import it.univr.di.testero.model.Test;
import it.univr.di.testero.repository.DomandaRepository;
import it.univr.di.testero.repository.RispostaRepository;
import it.univr.di.testero.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.client.GraphQlClientException;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;

import java.time.Instant;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.util.List;
import java.util.Optional;

@Controller
public class TestResponder {
    @Autowired
    TestRepository testRepository;
    @Autowired
    DomandaRepository domandaRepository;
    @Autowired
    RispostaRepository rispostaRepository;

    @SchemaMapping(typeName = "Mutation", field = "addTest")
    public Test addTest(@Argument("input") AddTestData input){
        Test t = new Test(OffsetDateTime.ofInstant(Instant.now(), ZoneOffset.UTC), input.getNome(), input.getOrdineCasuale(), input.getDomandeConNumero());
        return testRepository.save(t);
    }

    @SchemaMapping(typeName = "Mutation", field = "addQuestion")
    public Domanda addQuestion(@Argument("input") AddDomandaData input){
        Domanda domanda = new Domanda(input.getNome(), input.getTesto(), input.getPunti(), input.getOrdineCasuale(), input.getRisposteConNumero());
        domanda = domandaRepository.save(domanda);

        List<AddRispostaData> rispostaDataList = input.getRisposte();
        for(AddRispostaData addRispostaData: rispostaDataList){
            rispostaRepository.save(new Risposta(addRispostaData.getTesto(), addRispostaData.getPunteggio(), domanda));
        }

        Optional<Domanda> result = domandaRepository.findById(domanda.getId());

        if(result.isEmpty()){
            throw new GraphQLException();
        }

        return result.get();
    }
}