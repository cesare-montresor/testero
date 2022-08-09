package it.univr.di.testero.api;

import graphql.kickstart.tools.GraphQLQueryResolver;
import it.univr.di.testero.repository.core.Post;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class Tests implements GraphQLQueryResolver {

    public List<Post> recentPosts() {
        ArrayList<Post> list = new ArrayList<Post>();
        list.add( new Post("1","A") );
        list.add( new Post("2","B") );
        list.add( new Post("3","C") );
        list.add( new Post("4","D") );


        return list;
    }

    public String hi(){
        return "hi!";
    }
    public String greetings(String name){
        return "Hello "+name+"!";
    }



}