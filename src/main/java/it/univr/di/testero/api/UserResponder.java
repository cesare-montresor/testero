package it.univr.di.testero.api;


import it.univr.di.testero.config.AuthService;
import it.univr.di.testero.model.User;
import it.univr.di.testero.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;

@Controller
public class UserResponder {
    @Autowired
    private AuthService authService;

    @Autowired
    private UserRepository userRepository;

    @SchemaMapping(typeName = "Query", field = "getUser")
    public User getUser() {
        return authService.userGet();
    }
}