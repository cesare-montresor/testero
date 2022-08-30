package it.univr.di.testero.api.input;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
public class AddRispostaData {
    @Setter @Getter
    private String testo;
    @Setter @Getter
    private Float punteggio;
}
