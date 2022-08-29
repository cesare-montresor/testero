package it.univr.di.testero.api;

import it.univr.di.testero.api.input.AddTestData;
import it.univr.di.testero.model.Test;
import it.univr.di.testero.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;

import java.time.Instant;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;

@Controller
public class TestResponder {
    @Autowired
    TestRepository testRepository;

    @SchemaMapping(typeName = "Mutation", field = "addTest")
    public Test addTest(@Argument("input") AddTestData input){
        Test t = new Test(OffsetDateTime.ofInstant(Instant.now(), ZoneOffset.UTC), input.getNome(), input.getOrdineCasuale(), input.getDomandeConNumero());
        return testRepository.save(t);
    }
}