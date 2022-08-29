package it.univr.di.testero.repository;
import it.univr.di.testero.model.Compilazione;
import it.univr.di.testero.model.Domanda;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface CompilazioneRepository extends CrudRepository<Compilazione, Long> {
    List<Compilazione> findAll();
    Optional<Compilazione> findById(Long id);
}