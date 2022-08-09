package it.univr.di.testero.api;

import graphql.kickstart.tools.GraphQLQueryResolver;
import it.univr.di.testero.model.auth.User;
import it.univr.di.testero.repository.auth.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpSession;
import java.util.Optional;

@Component
public class Auth implements GraphQLQueryResolver {

    @Autowired
    private HttpSession httpSession;
    @Autowired
    UserDetailsService userDetailsService;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserRepository userRepository;

    public String login(String username, String password) {
        //Get system password encoder
        String password_enc = passwordEncoder.encode(password);

        Optional<User> userExists = userRepository.findByUsernameAndPassword(username,password_enc);
        if (userExists.isPresent()){
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            Authentication authentication = new UsernamePasswordAuthenticationToken(username, password, userDetails.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
        httpSession.setAttribute("SPRING_SECURITY_CONTEXT", SecurityContextHolder.getContext());
        return httpSession.getId();
    }

    public boolean logout(){
        return true;
    }
}