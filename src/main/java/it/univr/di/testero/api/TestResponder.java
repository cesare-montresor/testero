package it.univr.di.testero.api;

import graphql.GraphQLException;
import it.univr.di.testero.api.input.AddDomandaData;
import it.univr.di.testero.api.input.AddRispostaData;
import it.univr.di.testero.api.input.AddTestData;
import it.univr.di.testero.api.input.GiveRispostaData;
import it.univr.di.testero.api.output.TestInfo;
import it.univr.di.testero.config.GraphQLCustomError;
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
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.server.ResponseStatusException;

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

    @MutationMapping
    public Test addTest(@Argument AddTestData input){
        if(!userService.userGet().getRoles().equals(UserRoles.TEACHER.name())) {
            throw new GraphQLException();
        }

        return professorService.addTest(input.getNome(), input.getOrdineCasuale(), input.getDomandeConNumero());
    }

    @MutationMapping
    public Domanda addQuestion(@Argument AddDomandaData input){
        if(!userService.userGet().getRoles().equals(UserRoles.TEACHER.name())){
            throw new GraphQLException();
        }

        Domanda domanda = professorService.addQuestion(input.getTestId(), input.getNome(), input.getTesto(), input.getPunti(), input.getOrdineCasuale(), input.getRisposteConNumero());

        for(AddRispostaData addRispostaData: input.getRisposte()){
            Risposta risposta = professorService.addAnswerToQuestion(addRispostaData.getTesto(), addRispostaData.getPunteggio(), domanda);
            domanda.risposte.add(risposta);
        }

        domanda = professorService.findQuestion(domanda.getId());

        if(domanda == null){
            throw new GraphQLException();
        }

        return domanda;
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
}