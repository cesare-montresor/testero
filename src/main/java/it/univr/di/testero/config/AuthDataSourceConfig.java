package it.univr.di.testero.config;

import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
public class AuthDataSourceConfig {

    @Bean
    @ConfigurationProperties("spring.datasource.auth")
    public DataSourceProperties authDataSourceProperties() {
        return new DataSourceProperties();
    }

    @Bean
    public DataSource authDataSource() {
        return authDataSourceProperties()
          .initializeDataSourceBuilder()
          .build();
    }

}