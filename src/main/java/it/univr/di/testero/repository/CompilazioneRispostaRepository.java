package it.univr.di.testero.repository;
import it.univr.di.testero.model.CompilazioneRisposta;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface CompilazioneRispostaRepository extends CrudRepository<CompilazioneRisposta, Long> {
    List<CompilazioneRisposta> findAll();
    Optional<CompilazioneRisposta> findById(Long id);
}