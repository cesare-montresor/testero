package it.univr.di.testero.api;


import it.univr.di.testero.services.UserService;
import it.univr.di.testero.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;

@Controller
public class UserResponder {
    @Autowired
    private UserService userService;

    @QueryMapping
    public User getUser() {
        return userService.userGet();
    }
}