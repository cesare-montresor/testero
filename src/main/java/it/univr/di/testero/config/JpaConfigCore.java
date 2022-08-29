package it.univr.di.testero.config;

import it.univr.di.testero.model.Compilazione;
import it.univr.di.testero.model.CompilazioneRisposta;
import it.univr.di.testero.model.Domanda;
import it.univr.di.testero.model.Risposta;
import it.univr.di.testero.model.Test;
import it.univr.di.testero.repository.DomandaRepository;
import it.univr.di.testero.repository.RispostaRepository;
import it.univr.di.testero.repository.TestRepository;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.*;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;
import java.util.Objects;

@Configuration
@Primary
@EnableTransactionManagement
@EnableJpaRepositories(
  basePackages = {"it.univr.di.testero.repository"},
  includeFilters = { @ComponentScan.Filter(type = FilterType.ASSIGNABLE_TYPE, classes = {  TestRepository.class, RispostaRepository.class, DomandaRepository.class} ) },
  entityManagerFactoryRef = "coreEntityManagerFactory",
  transactionManagerRef = "coreTransactionManager"
)
public class JpaConfigCore {

    @Primary
    @Bean
    @ConfigurationProperties("spring.datasource.core")
    public DataSourceProperties coreDataSourceProperties() {
        return new DataSourceProperties();
    }

    @Primary
    @Bean
    public DataSource coreDataSource() {
        return coreDataSourceProperties()
                .initializeDataSourceBuilder()
                .build();
    }
    @Primary
    @Bean
    public LocalContainerEntityManagerFactoryBean coreEntityManagerFactory(
      @Qualifier("coreDataSource") DataSource dataSource,
      EntityManagerFactoryBuilder builder)
    {
        return builder
          .dataSource(dataSource)
          .packages( Test.class, Risposta.class, Domanda.class, Compilazione.class, CompilazioneRisposta.class )
          .build();
    }

    @Primary
    @Bean
    public PlatformTransactionManager coreTransactionManager(
      @Qualifier("coreEntityManagerFactory") LocalContainerEntityManagerFactoryBean coreEntityManagerFactory) {
        return new JpaTransactionManager(
            Objects.requireNonNull(
                coreEntityManagerFactory.getObject()
            )
        );
    }
}