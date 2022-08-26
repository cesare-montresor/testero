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
public class Test {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    public Long id;
    public Long data;
    public String nome;
    public Boolean ordineCasuale;
    public Boolean domandeConNumero;


    @ManyToMany
    @JoinTable(
            name="in_test", schema = "testero_core",
            joinColumns= {@JoinColumn(name="test_id")},
            inverseJoinColumns={@JoinColumn(name="domanda_id")}
    )
    public List<Domanda> domande;

    @OneToMany(mappedBy = "test", orphanRemoval = true, cascade = CascadeType.ALL)
    Collection<Compilazione> compilazioni;

    public Test() {}

    public Test(Long data, String nome, Boolean ordineCasuale, Boolean domandeConNumero ){
        this.data=data;
        this.nome=nome;
        this.ordineCasuale=ordineCasuale;
        this.domandeConNumero=domandeConNumero;
    }


}
