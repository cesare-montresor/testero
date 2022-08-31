package it.univr.di.testero.model;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="test", schema = "testero_core")
@NoArgsConstructor
public class Test {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Getter
    private Long id;
    @Getter @Setter
    private OffsetDateTime data;
    @Getter @Setter
    private String nome;
    @Getter @Setter
    private Boolean ordineCasuale;
    @Getter @Setter
    private Boolean domandeConNumero;

    @ManyToMany
    @JoinTable(
            name="in_test", schema = "testero_core",
            joinColumns= {@JoinColumn(name="test_id")},
            inverseJoinColumns={@JoinColumn(name="domanda_id")}
    )
    public List<Domanda> domande;

    public Test(OffsetDateTime data, String nome, Boolean ordineCasuale, Boolean domandeConNumero) {
        this.data = data;
        this.nome = nome;
        this.ordineCasuale = ordineCasuale;
        this.domandeConNumero = domandeConNumero;
    }
}
