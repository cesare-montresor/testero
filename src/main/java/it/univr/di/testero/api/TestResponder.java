package it.univr.di.testero.api;

import graphql.GraphQLException;
import graphql.GraphqlErrorException;
import it.univr.di.testero.api.input.AddDomandaData;
import it.univr.di.testero.api.input.AddRispostaData;
import it.univr.di.testero.api.input.AddTestData;
import it.univr.di.testero.api.input.GiveRispostaData;
import it.univr.di.testero.api.output.TestInfo;
import it.univr.di.testero.model.*;
import it.univr.di.testero.repository.*;
import it.univr.di.testero.services.ICompilationService;
import it.univr.di.testero.services.IProfessorService;
import it.univr.di.testero.services.IStudentService;
import it.univr.di.testero.services.UserService;
import org.hibernate.graph.Graph;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.client.GraphQlClientException;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.util.List;
import java.util.Optional;

@Controller
public class TestResponder {
    @Autowired
    private IProfessorService professorService;
    @Autowired
    private IStudentService studentService;
    @Autowired
    private ICompilationService compilationService;
    @Autowired
    private UserService userService;

    @QueryMapping
    public List<Test> allTests(){
        return studentService.allTests();
    }

    @MutationMapping
    public Test addTest(@Argument AddTestData input){
        return professorService.addTest(input.getNome(), input.getOrdineCasuale(), input.getDomandeConNumero());
    }

    @MutationMapping
    public Domanda addQuestion(@Argument AddDomandaData input){
        Domanda domanda = professorService.addQuestion(input.getNome(), input.getTesto(), input.getPunti(), input.getOrdineCasuale(), input.getRisposteConNumero());

        for(AddRispostaData addRispostaData: input.getRisposte()){
            professorService.addAnswerToQuestion(addRispostaData.getTesto(), addRispostaData.getPunteggio(), domanda);
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

        Compilazione compilazione = compilationService.takeTest(test.getId(), userService.userGet().getId());

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

        CompilazioneRisposta compilazioneRisposta = compilationService.giveAnswer(input.getIdCompilazione(), domanda.getId(), risposta.getId());

        if(compilazioneRisposta == null){
            throw new GraphQLException();
        }

        return compilazioneRisposta;
    }
}