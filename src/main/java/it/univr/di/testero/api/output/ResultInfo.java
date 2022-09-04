package it.univr.di.testero.api.output;

import it.univr.di.testero.model.Test;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
public class ResultInfo {
    @Getter @Setter
    private String nomeTest;
    @Getter @Setter
    private OffsetDateTime dataTest;
    @Getter @Setter
    private Boolean domandeConNumero;
    @Getter @Setter
    private List<Result> results = new ArrayList<>();

    public ResultInfo(String nomeTest, OffsetDateTime dataTest, Boolean domandeConNumero) {
        this.nomeTest = nomeTest;
        this.dataTest = dataTest;
        this.domandeConNumero = domandeConNumero;
    }
}
