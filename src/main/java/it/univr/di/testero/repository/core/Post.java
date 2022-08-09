package it.univr.di.testero.repository.core;


import graphql.kickstart.tools.GraphQLQueryResolver;
import org.springframework.stereotype.Component;

public class Post implements GraphQLQueryResolver {
    private String id;
    private String title;


    public Post(String id, String title){
        this.id = id;
        this.title = title;
    }
}