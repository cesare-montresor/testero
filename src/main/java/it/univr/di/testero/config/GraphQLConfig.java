package it.univr.di.testero.config;

import graphql.scalars.ExtendedScalars;
import graphql.schema.GraphQLScalarType;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.graphql.execution.RuntimeWiringConfigurer;

@Configuration
public class GraphQLConfig {
    @Bean
    RuntimeWiringConfigurer configurer() {
        GraphQLScalarType scalarType = ExtendedScalars.DateTime;
        return (builder) -> builder.scalar(scalarType);
    }
}

