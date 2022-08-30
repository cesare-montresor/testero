package it.univr.di.testero.model;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;


@Entity
@Table(name="risposta", schema = "testero_core")
@NoArgsConstructor
public class Risposta {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Getter
    private Long id = 0L;
    @Getter @Setter
    private String testo;
    @Getter @Setter
    private Float punteggio;
    @ManyToOne
    @JoinColumn(name = "domanda")
    @Getter @Setter
    private Domanda domanda;

    @OneToMany(mappedBy = "risposta", orphanRemoval = true, cascade = CascadeType.ALL)
    Collection<CompilazioneRisposta> compilazioniRisposte;

    public Risposta(String testo, Float punteggio, Domanda domanda){
        this.testo=testo;
        this.punteggio=punteggio;
        this.domanda=domanda;
    }
}
