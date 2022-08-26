package it.univr.di.testero.model.core;
import it.univr.di.testero.model.auth.User;

import javax.persistence.*;
import java.util.Collection;

/*
CREATE TABLE IF NOT EXISTS testero_core.compilazione (
    id integer NOT NULL DEFAULT nextval('compilazione_id_seq'::regclass),
    dataTest TIMESTAMP NOT NULL,
    nomeTest VARCHAR NOT NULL,
    user_id integer NOT NULL ,
    completo BOOLEAN NOT NULL default FALSE,
    PRIMARY KEY ( id ),
    UNIQUE (dataTest , nomeTest )
);
TABLESPACE pg_default;
ALTER TABLE IF EXISTS testero_core.compilazione OWNER to testero_core;
*/

@Entity
@Table(name="compilazione", schema = "testero_core")
public class Compilazione {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long id = 0L;

    @ManyToOne
    public Test test;

    public Long user_id;

    public Boolean completo;

    @OneToMany(mappedBy = "compilazione", orphanRemoval = true, cascade = CascadeType.ALL)
    Collection<CompilazioneRisposta> compilazioniRisposte;


    public Compilazione() {}

    public Compilazione(Test test, Long user_id, Boolean completo ){
        this.test=test;
        this.user_id=user_id;
        this.completo=completo;
    }


}
