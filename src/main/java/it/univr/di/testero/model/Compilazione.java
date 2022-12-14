package it.univr.di.testero.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name="compilazione", schema = "testero_resp")
@NoArgsConstructor
public class Compilazione {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter
    private Long id = 0L;

    @Getter @Setter @Column(name = "test_id")
    private Long test;

    @Getter @Setter
    private Boolean completo;

    @Getter @Setter @Column(name = "user_id")
    private Long user;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "compilazione", orphanRemoval = true, cascade = CascadeType.ALL)
    @Getter @Setter
    private List<CompilazioneRisposta> compilazioniRisposte;

    public Compilazione(Long test, Long user, Boolean completo){
        this.test=test;
        this.user=user;
        this.completo=completo;
    }
}
