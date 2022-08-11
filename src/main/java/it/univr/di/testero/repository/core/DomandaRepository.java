package it.univr.di.testero.repository.core;
import it.univr.di.testero.model.core.Domanda;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface DomandaRepository extends CrudRepository<Domanda, String> {
    List<Domanda> findAll();
    Optional<Domanda> findById(String name);
}