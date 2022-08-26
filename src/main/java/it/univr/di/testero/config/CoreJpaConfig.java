package it.univr.di.testero.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
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
  entityManagerFactoryRef = "coreEntityManagerFactory",
  transactionManagerRef = "coreTransactionManager"
)
public class CoreJpaConfig {

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
          .packages("it.univr.di.testero.model.core")
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