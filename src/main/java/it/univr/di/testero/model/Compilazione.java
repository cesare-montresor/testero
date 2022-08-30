package it.univr.di.testero.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name="compilazione", schema = "testero_resp")
@NoArgsConstructor
public class Compilazione {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter
    private Long id = 0L;

    @ManyToOne
    @Getter @Setter
    private Test test;

    @ManyToOne
    @Getter @Setter
    private User user;

    @Getter @Setter
    private Boolean completo;

    @OneToMany(mappedBy = "compilazione", orphanRemoval = true, cascade = CascadeType.ALL)
    @Getter @Setter
    private Collection<CompilazioneRisposta> compilazioniRisposte;

    public Compilazione(Test test, User user, Boolean completo){
        this.test=test;
        this.user=user;
        this.completo=completo;
    }
}
