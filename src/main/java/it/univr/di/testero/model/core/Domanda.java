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
    String nome;
    String testo;
    Float punti;
    Boolean ordineCasuale;
    Boolean domandeConNumero;


    @OneToMany(mappedBy = "domanda", orphanRemoval = true, cascade = CascadeType.ALL)
    Collection<Risposta> risposte;


    @ManyToMany
    @JoinTable(
            name="in_test", schema = "testero_core",
            joinColumns= {
                @JoinColumn(name="dataTest", referencedColumnName="id"),
                @JoinColumn(name="nomeTest", referencedColumnName="id")
            },
            inverseJoinColumns=@JoinColumn(name="domanda", referencedColumnName="nome")
    )
    private List<Test> tests;


    public Domanda() {}

    public Domanda(String nome, String testo, Float punti, Boolean ordineCasuale, Boolean domandeConNumero ){
        this.nome=nome;
        this.testo=testo;
        this.punti=punti;
        this.ordineCasuale=ordineCasuale;
        this.domandeConNumero=domandeConNumero;
    }


    /*
    public String toString(){
        return "Id: "+ id + "\nUsername: " + username + "\n" +
                "Name: " + username + "\n" +
                "Roles: " + username + "\n" ;
    }
    */



}
