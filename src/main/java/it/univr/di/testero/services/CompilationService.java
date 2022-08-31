package it.univr.di.testero.services;

import it.univr.di.testero.model.*;
import it.univr.di.testero.repository.CompilazioneRepository;
import it.univr.di.testero.repository.CompilazioneRispostaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CompilationService implements ICompilationService{
    @Autowired
    private CompilazioneRepository compilazioneRepository;
    @Autowired
    private CompilazioneRispostaRepository compilazioneRispostaRepository;

    @Override
    public Compilazione takeTest(Long testId, Long userId) {
        Compilazione compilazione = new Compilazione(testId, userId, false);
        return compilazioneRepository.save(compilazione);
    }

    @Override
    public CompilazioneRisposta giveAnswer(Long compilazioneId, Long domandaId, Long rispostaId) {
        Optional<Compilazione> compilazioneResult = compilazioneRepository.findById(compilazioneId);

        if(compilazioneResult.isEmpty()){
            return null;
        }

        Compilazione compilazione = compilazioneResult.get();

        CompilazioneRisposta compilazioneRisposta = new CompilazioneRisposta(compilazione, domandaId, rispostaId);
        return compilazioneRispostaRepository.save(compilazioneRisposta);
    }
}
