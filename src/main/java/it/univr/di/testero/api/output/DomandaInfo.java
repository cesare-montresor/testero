package it.univr.di.testero.api.output;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
public class DomandaInfo {
    @Getter @Setter
    private Long id;
    @Getter @Setter
    private Boolean alreadyExists;
}
