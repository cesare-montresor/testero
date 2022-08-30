package it.univr.di.testero.api.output;

import it.univr.di.testero.model.Compilazione;
import it.univr.di.testero.model.Test;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
public class TestInfo {
    @Setter @Getter
    private Compilazione compilazione;
    @Setter @Getter
    private Test test;
}
