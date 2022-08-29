package it.univr.di.testero.api;

import it.univr.di.testero.api.input.AddTestData;
import it.univr.di.testero.model.Test;
import it.univr.di.testero.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;

@Component
public class TestResponder {
    @Autowired
    TestRepository testRepository;


}