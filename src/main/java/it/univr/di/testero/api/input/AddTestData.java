package it.univr.di.testero.api.input;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
public class AddTestData {
    @Setter @Getter
    private String nome;
    @Setter @Getter
    private Boolean ordineCasuale;
    @Setter @Getter
    private Boolean domandeConNumero;
}
