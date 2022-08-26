package it.univr.di.testero.model.core;
import javax.persistence.*;
import java.util.Collection;
import java.util.List;

/*
CREATE TABLE Domanda (
        nome VARCHAR PRIMARY KEY ,
        testo VARCHAR NOT NULL ,
        punti DECIMAL (5 ,2) , -- quanti punti vale la domanda . Esempio : 2.0
        ordineCasuale BOOLEAN DEFAULT FALSE , -- le risposte devono essere presentate in ordine casuale
        risposteConNumero BOOLEAN DEFAULT FALSE -- le risposte devono essere numerate
);
*/

@Entity
@Table(name="domanda", schema = "testero_core")
public class Domanda {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    public Long id = 0L;
    public String nome;
    public String testo;
    public Float punti;
    public Boolean ordineCasuale;
    public Boolean risposteConNumero;

    @OneToMany(mappedBy = "domanda", orphanRemoval = true, cascade = CascadeType.ALL)
    public Collection<Risposta> risposte;


    @ManyToMany(mappedBy = "domande")
    public Collection<Test> tests;

    @OneToMany(mappedBy = "domanda", orphanRemoval = true, cascade = CascadeType.ALL)
    public Collection<CompilazioneRisposta> compilazioniRisposte;



    public Domanda() {}

    public Domanda(String nome, String testo, Float punti, Boolean ordineCasuale, Boolean risposteConNumero ){
        this.nome=nome;
        this.testo=testo;
        this.punti=punti;
        this.ordineCasuale=ordineCasuale;
        this.risposteConNumero=risposteConNumero;
    }


    /*
    public String toString(){
        return "Id: "+ id + "\nUsername: " + username + "\n" +
                "Name: " + username + "\n" +
                "Roles: " + username + "\n" ;
    }
    */



}
