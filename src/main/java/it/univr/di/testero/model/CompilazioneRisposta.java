package it.univr.di.testero.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="compilazione_risposta", schema = "testero_resp")
@NoArgsConstructor
public class CompilazioneRisposta {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Getter
    private Long id = 0L;

    @ManyToOne
    @Getter @Setter
    private Compilazione compilazione;

    @ManyToOne
    @Getter @Setter
    private Domanda domanda;

    @ManyToOne
    @Getter @Setter
    private Risposta risposta;

    public CompilazioneRisposta(Compilazione compilazione, Domanda domanda, Risposta risposta){
        this.compilazione=compilazione;
        this.domanda=domanda;
        this.risposta=risposta;
    }
}
