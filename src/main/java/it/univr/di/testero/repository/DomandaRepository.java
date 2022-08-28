package it.univr.di.testero.repository;
import it.univr.di.testero.model.Domanda;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface DomandaRepository extends CrudRepository<Domanda, Long> {
    List<Domanda> findAll();
    Optional<Domanda> findById(Long id);
    Optional<Domanda> findByNome(String nome);
}