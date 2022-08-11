package it.univr.di.testero.model.core;

import java.io.Serializable;

public class TestId implements Serializable {
    Long data;
    String nome;
   // Constructors
   // Getters /Setters equals and hashcode
    public TestId(Long data, String nome) {
        this.data = data;
        this.nome = nome;
    }
}