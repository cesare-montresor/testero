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
    @JoinColumn(name = "compilazione")
    private Compilazione compilazione;

    @Getter @Setter @Column(name = "domanda_id")
    private Long domanda;

    @Getter @Setter @Column(name = "risposta_id")
    private Long risposta;

    public CompilazioneRisposta(Compilazione compilazione, Long domanda, Long risposta){
        this.compilazione=compilazione;
        this.domanda=domanda;
        this.risposta=risposta;
    }
}
