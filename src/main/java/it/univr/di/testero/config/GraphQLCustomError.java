package it.univr.di.testero.config;

import graphql.ErrorType;
import graphql.GraphQLError;
import graphql.language.SourceLocation;

import java.util.List;

public class GraphQLCustomError extends RuntimeException implements GraphQLError {

    private static final long serialVersionUID = 1L;

    private final String message;

    private boolean writeStacktrace = false;

    @Override
    public String getMessage() {
        return message;
    }

    public GraphQLCustomError(String message, boolean writeStacktrace) {
        super(message, null, false, writeStacktrace);
        this.writeStacktrace = writeStacktrace;
        this.message = "Lol";
    }

    public GraphQLCustomError(String message, Exception ex) {
        super();
        this.message = "Lol";
    }

    @Override
    public List<SourceLocation> getLocations() {
        return null;
    }

    @Override
    public ErrorType getErrorType() {
        return null;
    }
}