package it.univr.di.testero.model.core;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;

/*
CREATE TABLE test (
    data TIMESTAMP NOT NULL ,
    nome VARCHAR NOT NULL ,
    ordineCasuale BOOLEAN DEFAULT FALSE , -- le domande devono essere presentate in ordine casuale
    domandeConNumero BOOLEAN DEFAULT FALSE , -- le domande devono essere numerate
    PRIMARY KEY ( data , nome )
);

CREATE TABLE in_test (
    domanda VARCHAR REFERENCES Domanda ,
    dataTest TIMESTAMP NOT NULL ,
    nomeTest VARCHAR NOT NULL ,
    FOREIGN KEY ( dataTest , nomeTest ) REFERENCES Test
);
*/

@Entity
@Table(name="test", schema = "testero_core")
@IdClass(TestId.class)
public class Test {

    @Id
    public LocalDateTime data;
    @Id
    public String nome;
    public Boolean ordineCasuale;
    public Boolean domandeConNumero;


    @ManyToMany
    @JoinTable(
            name="in_test", schema = "testero_core",
            joinColumns= {@JoinColumn(name="dataTest"), @JoinColumn(name="nomeTest")},
            inverseJoinColumns={@JoinColumn(name="nome")}
    )
    public List<Domanda> domande;

    @OneToMany(mappedBy = "test", orphanRemoval = true, cascade = CascadeType.ALL)
    Collection<Compilazione> compilazioni;

    public Test() {}

    public Test(LocalDateTime data, String nome, Boolean ordineCasuale, Boolean domandeConNumero ){
        this.data=data;
        this.nome=nome;
        this.ordineCasuale=ordineCasuale;
        this.domandeConNumero=domandeConNumero;
    }


}
