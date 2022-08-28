package it.univr.di.testero.repository;
import it.univr.di.testero.model.Risposta;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface RispostaRepository extends CrudRepository<Risposta, Long> {
    List<Risposta> findAll();
    Optional<Risposta> findById(Long id);
}