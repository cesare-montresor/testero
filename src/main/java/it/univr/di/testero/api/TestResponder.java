package it.univr.di.testero.api;

import graphql.kickstart.tools.GraphQLMutationResolver;
import it.univr.di.testero.api.input.AddTestData;
import it.univr.di.testero.model.core.Test;
import it.univr.di.testero.repository.core.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Component
public class TestResponder implements GraphQLMutationResolver {
    @Autowired
    TestRepository testRepository;

    public Test addTest(AddTestData input){

        Test t = new Test(
                LocalDateTime.now().toEpochSecond(ZoneOffset.UTC),
                input.nome,
                input.ordineCasuale,
                input.domandeConNumero
        );
        return testRepository.save(t);
    }



}