package it.univr.di.testero.model;

import javax.persistence.*;

/*
CREATE TABLE IF NOT EXISTS testero_core.compilazione_risposta (
    id integer PRIMARY KEY,
    compilazione integer NOT NULL,
    domanda integer NOT NULL,
    risposta integer NOT NULL,
);
TABLESPACE pg_default;
ALTER TABLE IF EXISTS testero_core.compilazione_risposta OWNER to testero_core;
*/

@Entity
@Table(name="compilazione_risposta", schema = "testero_core")
public class CompilazioneRisposta {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    public Long id = 0L;

    @ManyToOne
    public Compilazione compilazione;

    @ManyToOne
    public Domanda domanda;

    @ManyToOne
    public Risposta risposta;



    public CompilazioneRisposta() {}

    public CompilazioneRisposta(Compilazione compilazione, Domanda domanda, Risposta risposta){
        this.compilazione=compilazione;
        this.domanda=domanda;
        this.risposta=risposta;
    }


}
