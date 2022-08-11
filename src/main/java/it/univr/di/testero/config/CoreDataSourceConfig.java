package it.univr.di.testero.config;

import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
public class CoreDataSourceConfig {

    @Bean
    @ConfigurationProperties("spring.datasource.core")
    public DataSourceProperties coreDataSourceProperties() {
        return new DataSourceProperties();
    }

    @Bean
    public DataSource coreDataSource() {
        return coreDataSourceProperties()
          .initializeDataSourceBuilder()
          .build();
    }

}