package it.univr.di.testero.services;

import graphql.GraphQLException;
import it.univr.di.testero.model.*;
import it.univr.di.testero.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService implements IStudentService{
    @Autowired
    private TestRepository testRepository;
    @Autowired
    private DomandaRepository domandaRepository;
    @Autowired
    private RispostaRepository rispostaRepository;
    @Autowired
    private CompilazioneRepository compilazioneRepository;
    @Autowired
    private CompilazioneRispostaRepository compilazioneRispostaRepository;

    @Override
    public List<Test> allTests(){
        return testRepository.findAll();
    }

    @Override
    public Compilazione takeTest(Long testId, User user) {
        Optional<Test> result = testRepository.findById(testId);

        if(result.isEmpty()){
            return null;
        }

        Test test = result.get();

        Compilazione compilazione = new Compilazione(test, user, false);
        return compilazioneRepository.save(compilazione);
    }

    @Override
    public CompilazioneRisposta giveAnswer(Long idCompilazione, Long idDomanda, Long idRisposta) {
        Optional<Compilazione> compilazioneResult = compilazioneRepository.findById(idCompilazione);
        Optional<Domanda> domandaResult = domandaRepository.findById(idDomanda);
        Optional<Risposta> rispostaResult = rispostaRepository.findById(idRisposta);

        if(domandaResult.isEmpty() || rispostaResult.isEmpty() || compilazioneResult.isEmpty()){
            return null;
        }

        Compilazione compilazione = compilazioneResult.get();
        Domanda domanda = domandaResult.get();
        Risposta risposta = rispostaResult.get();

        CompilazioneRisposta compilazioneRisposta = new CompilazioneRisposta(compilazione, domanda, risposta);
        return compilazioneRispostaRepository.save(compilazioneRisposta);
    }
}
