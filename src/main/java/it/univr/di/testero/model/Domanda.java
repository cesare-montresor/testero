package it.univr.di.testero.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name="domanda", schema = "testero_core")
@NoArgsConstructor
public class Domanda {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Getter
    private Long id = 0L;
    @Getter @Setter
    private String nome;
    @Getter @Setter
    private String testo;
    @Getter @Setter
    private Float punti;
    @Getter @Setter
    private Boolean ordineCasuale;
    @Getter @Setter
    private Boolean risposteConNumero;

    @OneToMany(mappedBy = "domanda", orphanRemoval = true, cascade = CascadeType.ALL)
    public List<Risposta> risposte;

    @ManyToMany(mappedBy = "domande")
    public List<Test> tests;

    public Domanda(String nome, String testo, Float punti, Boolean ordineCasuale, Boolean risposteConNumero ){
        this.nome=nome;
        this.testo=testo;
        this.punti=punti;
        this.ordineCasuale=ordineCasuale;
        this.risposteConNumero=risposteConNumero;
    }
}
