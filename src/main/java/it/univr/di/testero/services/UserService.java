package it.univr.di.testero.services;

import it.univr.di.testero.config.UserRoles;
import it.univr.di.testero.model.User;
import it.univr.di.testero.model.UserAuthDetails;
import it.univr.di.testero.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Bean
    public PasswordEncoder getPasswordEncoder() {
        return passwordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByUsername(userName);

        user.orElseThrow( () -> new UsernameNotFoundException("Not found: " + userName) );

        return user.map(UserAuthDetails::new).get();
    }

    public User userAdd(String username, String password, String name, String roles) {
        // Username is already present

        Optional<User> userExists = userRepository.findByUsername(username);
        if (userExists.isPresent()) return null;

        //Get system password encoder
        String password_enc = passwordEncoder.encode(password);

        //Create new user
        User user = new User(username, password_enc, name, roles);

        return userRepository.save(user);
    }

    public User userGet(Boolean safe) {
        User user = userAuthenticated();
        if ( !safe ){ return user; }
        if (user == null && safe ){
            Optional<User> req = userRepository.findByUsername("mario");
            if ( req.isPresent() ){
                user = req.get();
            }
        }
        return user;
    }

    public User userGet() {
        return userGet(true); //TODO: change to false in production
    }

    public boolean isTeacher(){
        User user = userGet();
        if (user == null) {return false;}
        return user.getRoles().equals(UserRoles.TEACHER.name());
    }
    public boolean isStudent(){
        User user = userGet();
        if (user == null) {return false;}
        return user.getRoles().equals(UserRoles.STUDENT.name());
    }

    public User userAuthenticated() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        //TODO remove
        if (! (auth.getPrincipal() instanceof UserAuthDetails )){ return null; } // auth.getPrincipal() returns an empty string when not authenticated

        UserAuthDetails details = (UserAuthDetails) auth.getPrincipal();

        Optional<User> user = userRepository.findByUsername( details.getUsername() );
        //TODO remove
        if (user.isEmpty() ) { return null; }

        return user.get();
    }
}