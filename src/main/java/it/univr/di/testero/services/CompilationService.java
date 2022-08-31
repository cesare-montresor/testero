package it.univr.di.testero.services;

import it.univr.di.testero.model.*;
import it.univr.di.testero.repository.CompilazioneRepository;
import it.univr.di.testero.repository.CompilazioneRispostaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CompilationService{
    @Autowired
    private CompilazioneRepository compilazioneRepository;
    @Autowired
    private CompilazioneRispostaRepository compilazioneRispostaRepository;

    public Compilazione getCompilazione(Long compilazioneId){
        Optional<Compilazione> compilazione = compilazioneRepository.findById(compilazioneId);

        if(compilazione.isEmpty()){
            return null;
        }

        return compilazione.get();
    }

    public Compilazione takeTest(Long testId, Long userId) {
        Compilazione compilazione = new Compilazione(testId, userId, false);
        return compilazioneRepository.save(compilazione);
    }

    public CompilazioneRisposta giveAnswer(Compilazione compilazione, Long domandaId, Long rispostaId) {
        CompilazioneRisposta compilazioneRisposta = new CompilazioneRisposta(compilazione, domandaId, rispostaId);
        return compilazioneRispostaRepository.save(compilazioneRisposta);
    }
}
