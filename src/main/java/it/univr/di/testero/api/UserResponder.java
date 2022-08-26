package it.univr.di.testero.api;

import graphql.kickstart.tools.GraphQLQueryResolver;
import it.univr.di.testero.config.AuthService;
import it.univr.di.testero.model.auth.User;
import it.univr.di.testero.repository.auth.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserResponder implements GraphQLQueryResolver {

    @Autowired
    private AuthService authService;

    @Autowired
    private UserRepository userRepository;

    public String userLevel() {
        User user = authService.userGet();
        return user.roles;
    }

}