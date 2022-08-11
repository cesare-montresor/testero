package it.univr.di.testero.repository.core;
import it.univr.di.testero.model.core.Test;
import it.univr.di.testero.model.core.TestId;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface TestRepository extends CrudRepository<Test, TestId> {
    List<Test> findAll();
    Optional<Test> findById(TestId id);
}