package it.univr.di.testero.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;
import java.util.Objects;

@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(
  basePackages = {"it.univr.di.testero.repository.auth"},
  entityManagerFactoryRef = "authEntityManagerFactory",
  transactionManagerRef = "authTransactionManager"
)
public class AuthJpaConfig {

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

    @Bean
    public LocalContainerEntityManagerFactoryBean authEntityManagerFactory(
      @Qualifier("authDataSource") DataSource dataSource,
      EntityManagerFactoryBuilder builder)
    {
        return builder
          .dataSource(dataSource)
          .packages("it.univr.di.testero.model.auth")
          .build();
    }

    @Bean
    public PlatformTransactionManager authTransactionManager(
      @Qualifier("authEntityManagerFactory") LocalContainerEntityManagerFactoryBean authEntityManagerFactory) {
        return new JpaTransactionManager(
                Objects.requireNonNull(
                        authEntityManagerFactory.getObject()
                )
        );
    }
}