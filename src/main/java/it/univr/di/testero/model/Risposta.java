package it.univr.di.testero.model;
import javax.persistence.*;
import java.util.Collection;

/*
CREATE TABLE Risposta (
    id serial PRIMARY KEY ,
    testo VARCHAR NOT NULL ,
    punteggio DECIMAL (5 ,4) CHECK ( punteggio <= 1.0) , -- percentuale dei punti della domanda
    domanda VARCHAR REFERENCES Domanda
);
*/


@Entity
@Table(name="risposta", schema = "testero_core")
public class Risposta {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    public Long id = 0L;
    public String testo;
    public Float punteggio;
    @ManyToOne
    @JoinColumn(name = "domanda")
    public Domanda domanda;

    @OneToMany(mappedBy = "risposta", orphanRemoval = true, cascade = CascadeType.ALL)
    Collection<CompilazioneRisposta> compilazioniRisposte;

    public Risposta() {}

    public Risposta(String testo, Float punteggio, Domanda domanda){
        this.testo=testo;
        this.punteggio=punteggio;
        this.domanda=domanda;
    }

}
