package it.univr.di.testero.config;

import it.univr.di.testero.model.*;
import it.univr.di.testero.repository.*;
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
@EnableTransactionManagement
@EnableJpaRepositories(
  basePackages = {"it.univr.di.testero.repository"},
  includeFilters = { @ComponentScan.Filter(type = FilterType.ASSIGNABLE_TYPE, classes = {  CompilazioneRepository.class, CompilazioneRispostaRepository.class} ) },
  entityManagerFactoryRef = "respEntityManagerFactory",
  transactionManagerRef = "respTransactionManager"
)
public class JpaConfigResp {

    @Bean
    @ConfigurationProperties("spring.datasource.resp")
    public DataSourceProperties respDataSourceProperties() {
        return new DataSourceProperties();
    }


    @Bean
    public DataSource respDataSource() {
        return respDataSourceProperties()
                .initializeDataSourceBuilder()
                .build();
    }

    @Bean
    public LocalContainerEntityManagerFactoryBean respEntityManagerFactory(
      @Qualifier("respDataSource") DataSource dataSource,
      EntityManagerFactoryBuilder builder)
    {
        return builder
          .dataSource(dataSource)
          .packages( Compilazione.class, CompilazioneRisposta.class )
          .build();
    }
    @Bean
    public PlatformTransactionManager respTransactionManager(
      @Qualifier("respEntityManagerFactory") LocalContainerEntityManagerFactoryBean respEntityManagerFactory) {
        return new JpaTransactionManager(
            Objects.requireNonNull(
                respEntityManagerFactory.getObject()
            )
        );
    }
}