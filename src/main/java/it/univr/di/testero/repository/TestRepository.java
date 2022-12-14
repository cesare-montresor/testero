package it.univr.di.testero.repository;
import it.univr.di.testero.model.Test;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface TestRepository extends CrudRepository<Test, Long> {
    List<Test> findAll();
    Optional<Test> findById(Long id);

    List<Test> findByCompleto(Boolean completo);

}