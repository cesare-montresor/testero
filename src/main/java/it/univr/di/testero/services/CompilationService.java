package it.univr.di.testero.services;

import graphql.GraphQLException;
import it.univr.di.testero.model.*;
import it.univr.di.testero.repository.CompilazioneRepository;
import it.univr.di.testero.repository.CompilazioneRispostaRepository;
import it.univr.di.testero.repository.TestRepository;
import it.univr.di.testero.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CompilationService{

    @Autowired
    private UserService userService;

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

            if(randomizeOrder) {
                Collections.shuffle(test.domande);
            }

            for (Domanda domanda: test.domande ) {
                CompilazioneRisposta cr = new CompilazioneRisposta(compilazione, domanda.getId(), null);
                cr = compilazioneRispostaRepository.save(cr);
                crs.add(cr);
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
        User user = userService.userGet();
        if ( user == null || !Objects.equals(compilazione.getUser(), user.getId())){ return null; }

        Optional<CompilazioneRisposta> result = compilazioneRispostaRepository.findByCompilazioneAndDomanda(compilazione, domandaId);
        if ( result.isEmpty() ) return null;

        CompilazioneRisposta cr = result.get();
        cr.setRisposta(rispostaId);
        return compilazioneRispostaRepository.save(cr);
    }

    public Compilazione completeCompilation(Long compilazioneId){
        Compilazione compilazione = getCompilazione(compilazioneId);

        if(compilazione == null){
            return null;
        }

        List<CompilazioneRisposta> compilazioneRisposte = compilazione.getCompilazioniRisposte();

        for(CompilazioneRisposta compilazioneRisposta: compilazioneRisposte){
            if(compilazioneRisposta.getRisposta() == null){
                return null;
            }
        }

        compilazione.setCompleto(true);
        compilazione = compilazioneRepository.save(compilazione);

        return compilazione;
    }

    public Compilazione getResults(Long userId, Long testId) {
        List<Compilazione> result = compilazioneRepository.findByUserAndTestAndCompleto(userId, testId, true);
        if (result.isEmpty())
            return null;
        else
            return result.get(result.size() - 1);
    }
}
