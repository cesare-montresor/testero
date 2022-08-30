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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private Long id = 0L;

    @Getter @Setter @Column(name = "test_id")
    private Long test;

    @Getter @Setter
    private Boolean completo;

    @Getter @Setter @Column(name = "user_id")
    private Long user;

    @OneToMany(mappedBy = "compilazione", orphanRemoval = true, cascade = CascadeType.ALL)
    @Getter @Setter @Column(name = "compilazione")
    private Collection<CompilazioneRisposta> compilazioniRisposte;

    public Compilazione(Long test, Long user, Boolean completo){
        this.test=test;
        this.user=user;
        this.completo=completo;
    }
}
