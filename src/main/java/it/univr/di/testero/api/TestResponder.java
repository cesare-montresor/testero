package it.univr.di.testero.api;

import graphql.GraphQLException;
import it.univr.di.testero.api.input.AddDomandaData;
import it.univr.di.testero.api.input.AddRispostaData;
import it.univr.di.testero.api.input.AddTestData;
import it.univr.di.testero.api.input.GiveRispostaData;
import it.univr.di.testero.api.output.DomandaInfo;
import it.univr.di.testero.api.output.Result;
import it.univr.di.testero.api.output.ResultInfo;
import it.univr.di.testero.api.output.TestInfo;
import it.univr.di.testero.config.UserRoles;
import it.univr.di.testero.model.*;
import it.univr.di.testero.services.CompilationService;
import it.univr.di.testero.services.ProfessorService;
import it.univr.di.testero.services.StudentService;
import it.univr.di.testero.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.time.Instant;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;

@Controller
public class TestResponder {
    @Autowired
    private ProfessorService professorService;
    @Autowired
    private StudentService studentService;
    @Autowired
    private CompilationService compilationService;
    @Autowired
    private UserService userService;

    @QueryMapping
    public List<Test> allTests(){
        return studentService.allTests();
    }

    @QueryMapping
    public Test getIncompleteTest(){
        if(!userService.isTeacher()) {
            throw new GraphQLException();
        }

        return professorService.getIncompleteTest();
    }

    @MutationMapping
    public Test addTest(@Argument AddTestData input){
        if(!userService.isTeacher()) {
            throw new GraphQLException();
        }

        Test test = professorService.getIncompleteTest();
        if (test == null) {
            test = professorService.addTest(input.getNome(), input.getOrdineCasuale(), input.getDomandeConNumero());
        }

        return test;
    }

    @MutationMapping
    public DomandaInfo addQuestion(@Argument AddDomandaData input){
        Domanda domanda = professorService.findQuestionByName(input.getNome());

        if(domanda != null){
            return new DomandaInfo(domanda.getId(), true);
        }

        if(!userService.isTeacher()){
            throw new GraphQLException();
        }

        domanda = professorService.addQuestion(input.getTestId(), input.getNome(), input.getTesto(), input.getPunti(), input.getOrdineCasuale(), input.getRisposteConNumero());

        if(domanda == null){
            throw new GraphQLException();
        }

        ArrayList<String> texts = new ArrayList<>();
        ArrayList<Float> scores = new ArrayList<>();

        for(AddRispostaData addRispostaData: input.getRisposte()){
            texts.add(addRispostaData.getTesto());
            scores.add(addRispostaData.getPunteggio());
        }

        ArrayList<Risposta> risposte = professorService.addAnswersToQuestion(texts, scores, domanda);

        if(risposte.size() != input.getRisposte().size()){
            throw new GraphQLException();
        }

        return new DomandaInfo(domanda.getId(), false);
    }

    @MutationMapping
    public TestInfo takeTest(@Argument String input){
        Long inputLong = Long.parseLong(input);
        Test test = studentService.findTest(inputLong);

        if(test == null){
            throw new GraphQLException();
        }

        boolean randomizeOrder = test.getOrdineCasuale();

        Compilazione compilazione = compilationService.takeTest( userService.userGet().getId(), test.getId(), randomizeOrder);

        if(compilazione == null){
            throw new GraphQLException();
        }

        return new TestInfo(compilazione, test);
    }

    @MutationMapping
    public CompilazioneRisposta giveAnswer(@Argument GiveRispostaData input){
        Domanda domanda = studentService.findQuestion(input.getIdDomanda());
        Risposta risposta = studentService.findAnswer(input.getIdRisposta());

        if(domanda == null || risposta == null){
            throw new GraphQLException();
        }

        List<Risposta> risposteDomanda = domanda.risposte;

        Compilazione compilazione = compilationService.getCompilazione(input.getIdCompilazione());

        if(!Objects.equals(userService.userGet().getId(), compilazione.getUser())){
            throw new GraphQLException();
        }

        Test test = studentService.findTest(compilazione.getTest());

        if(test == null || !test.domande.contains(domanda) || !risposteDomanda.contains(risposta)){
            throw new GraphQLException();
        }

        CompilazioneRisposta compilazioneRisposta = compilationService.giveAnswer(compilazione, domanda.getId(), risposta.getId());

        if(compilazioneRisposta == null){
            throw new GraphQLException();
        }

        return compilazioneRisposta;
    }

    @MutationMapping
    public Compilazione completeCompilation(@Argument Long input){
        Compilazione compilazione = compilationService.completeCompilation(input);

        if(compilazione == null){
            throw new GraphQLException();
        }

        return compilazione;
    }

    private Domanda findByIdDomanda(Collection<Domanda> domandaList, Long idDomanda) {
        return domandaList.stream().filter(domanda -> idDomanda.equals(domanda.getId())).findFirst().orElse(null);
    }

    private Risposta findByIdRisposta(Collection<Risposta> rispostaList, Long idRisposta) {
        return rispostaList.stream().filter(risposta -> idRisposta.equals(risposta.getId())).findFirst().orElse(null);
    }

    @MutationMapping
    public ResultInfo getResults(@Argument String input){
        Long inputLong = Long.parseLong(input);
        Test test = studentService.findTest(inputLong);

        if(test == null){
            throw new GraphQLException();
        }

        Compilazione compilazione = compilationService.getResults( userService.userGet().getId(), test.getId());

        if(compilazione == null){
            throw new GraphQLException();
        }

        ResultInfo resultInfo = new ResultInfo(test.getNome(), test.getData(), test.getDomandeConNumero());
        for (CompilazioneRisposta compilazioneRisposta : compilazione.getCompilazioniRisposte()) {
            Domanda currentDomanda = this.findByIdDomanda(test.domande, compilazioneRisposta.getDomanda());
            Risposta selectedRisposta = this.findByIdRisposta(currentDomanda.risposte, compilazioneRisposta.getRisposta());

            String testoDomanda = currentDomanda.getTesto();
            Float puntiDomanda = currentDomanda.getPunti();
            Boolean risposteConNumero = currentDomanda.getRisposteConNumero();
            String selectedTestoRisposta = selectedRisposta.getTesto();
            Float selectedRispostaPunteggio = currentDomanda.getPunti() * selectedRisposta.getPunteggio();
            List<String> correctTestoRispostaList = new ArrayList<>();
            for(Risposta risposta : currentDomanda.risposte) {
                if(risposta.getPunteggio() == 1.0)
                    correctTestoRispostaList.add(risposta.getTesto());
            }

            resultInfo.getResults().add(new Result(testoDomanda, puntiDomanda, risposteConNumero, selectedTestoRisposta,
                    selectedRispostaPunteggio, correctTestoRispostaList));
        }

        return resultInfo;
    }

}