package it.univr.di.testero.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.security.core.session.SessionRegistryImpl;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.savedrequest.NullRequestCache;
import org.springframework.security.web.session.HttpSessionEventPublisher;

//TODO: replace with security for graphql

@EnableWebSecurity
@EnableGlobalMethodSecurity(
        prePostEnabled = true,
        securedEnabled = true
)
public class SecurityConfig {
    @Autowired
    UserDetailsService userDetailsService;

    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService);
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        //Cross-site request forgery: OFF
        http.csrf().disable();
        // Public
        http.authorizeRequests()
            .regexMatchers("/css/.*").permitAll()
            .regexMatchers("/js/.*").permitAll()
            .regexMatchers("/img/.*").permitAll()
            .regexMatchers("/").permitAll();

        // GraphQL
        http.authorizeRequests()
            .regexMatchers("/graphql.*").authenticated()
            .antMatchers("/graphiql").authenticated();

        // Login/Logout
        http.formLogin().loginPage("/login").permitAll();
        http.logout().logoutUrl("/logout").permitAll();

        //Else
        http.authorizeRequests().anyRequest().authenticated();
        return http.build();
    }


    @Bean
    public SessionRegistry sessionRegistry() {
        return new SessionRegistryImpl();
    }

    @Bean
    public HttpSessionEventPublisher httpSessionEventPublisher() {
        return new HttpSessionEventPublisher();
    }

}