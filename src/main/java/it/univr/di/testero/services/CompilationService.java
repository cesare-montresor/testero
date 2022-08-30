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
    public Compilazione takeTest(Test test, User user) {
        Compilazione compilazione = new Compilazione(test, user, false);
        return compilazioneRepository.save(compilazione);
    }

    @Override
    public CompilazioneRisposta giveAnswer(Long idCompilazione, Domanda domanda, Risposta risposta) {
        Optional<Compilazione> compilazioneResult = compilazioneRepository.findById(idCompilazione);

        if(compilazioneResult.isEmpty()){
            return null;
        }

        Compilazione compilazione = compilazioneResult.get();

        CompilazioneRisposta compilazioneRisposta = new CompilazioneRisposta(compilazione, domanda, risposta);
        return compilazioneRispostaRepository.save(compilazioneRisposta);
    }
}
