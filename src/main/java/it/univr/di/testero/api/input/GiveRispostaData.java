package it.univr.di.testero.api.input;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
public class GiveRispostaData {
    @Getter @Setter
    private Long idCompilazione;
    @Getter @Setter
    private Long idDomanda;
    @Getter @Setter
    private Long idRisposta;
}
