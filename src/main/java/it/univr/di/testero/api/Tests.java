package it.univr.di.testero.api;

import graphql.kickstart.tools.GraphQLQueryResolver;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class Tests implements GraphQLQueryResolver {

    public String hi(){
        return "hi!";
    }
    public String greetings(String name){
        return "Hello "+name+"!";
    }



}