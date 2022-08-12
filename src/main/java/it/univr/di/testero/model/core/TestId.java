package it.univr.di.testero.model.core;

import java.io.Serializable;
import java.time.LocalDateTime;

public class TestId implements Serializable {
    public LocalDateTime data;
    public String nome;
   // Constructors
   // Getters /Setters equals and hashcode
    public TestId(){}

    public TestId(LocalDateTime data, String nome) {
        this.data = data;
        this.nome = nome;
    }
}