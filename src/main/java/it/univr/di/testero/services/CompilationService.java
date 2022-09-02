package it.univr.di.testero.services;

import it.univr.di.testero.model.*;
import it.univr.di.testero.repository.CompilazioneRepository;
import it.univr.di.testero.repository.CompilazioneRispostaRepository;
import it.univr.di.testero.repository.TestRepository;
import it.univr.di.testero.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class CompilationService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TestRepository testRepository;

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

    public Compilazione takeTest(Long userId, Long testId, boolean randomizeOrder) {
        List<Compilazione> result = compilazioneRepository.findByUserAndTestAndCompleto(userId, testId, false);

        Compilazione compilazione;

        if (result.isEmpty()){
            compilazione = new Compilazione(testId, userId, false);
            compilazione = compilazioneRepository.save(compilazione);

            Optional<Test> testResult = testRepository.findById(testId);

            if (testResult.isEmpty()) { return null; }

            Test test = testResult.get();
            List<CompilazioneRisposta> crs = new ArrayList<CompilazioneRisposta>();

            for (Domanda domanda: test.domande ) {
                CompilazioneRisposta cr = new CompilazioneRisposta(compilazione, domanda.getId(), null);
                cr = compilazioneRispostaRepository.save(cr);
                crs.add(cr);
            }

            if(randomizeOrder) {
                Collections.shuffle(crs);
            }

            compilazione.setCompilazioniRisposte(crs);
            compilazione = compilazioneRepository.save(compilazione);
        }
        else{
            compilazione = result.get(0);
        }

        return compilazione;
    }

    public CompilazioneRisposta giveAnswer(Compilazione compilazione, Long domandaId, Long rispostaId) {
        CompilazioneRisposta compilazioneRisposta = new CompilazioneRisposta(compilazione, domandaId, rispostaId);
        return compilazioneRispostaRepository.save(compilazioneRisposta);
    }
}
