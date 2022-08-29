package it.univr.di.testero.config;

import graphql.language.StringValue;
//import graphql.scalars.ExtendedScalars;
import graphql.scalars.ExtendedScalars;
import graphql.schema.*;
import net.bytebuddy.asm.Advice;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.graphql.execution.RuntimeWiringConfigurer;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;

@Configuration
public class GraphQLConfig {
    @Bean
    RuntimeWiringConfigurer configurer() {
        GraphQLScalarType scalarType = ExtendedScalars.DateTime;
        return (builder) -> builder.scalar(scalarType);
    }
}

