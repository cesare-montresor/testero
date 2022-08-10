package it.univr.di.testero.model.core;
import javax.persistence.*;

/*
CREATE TABLE InTest (
    domanda VARCHAR REFERENCES Domanda ,
    dataTest TIMESTAMP NOT NULL ,
    nomeTest VARCHAR NOT NULL ,
    FOREIGN KEY ( dataTest , nomeTest ) REFERENCES Test
);
*/




@Entity
@Table(name="intest", schema = "testero_core")
public class InTest {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id = 0L;

    Long data;
    String nome;
    Boolean ordineCasuale;
    Boolean domandeConNumero;

    /*
    @OneToMany(mappedBy = "mainDoctor", orphanRemoval = true, cascade = CascadeType.ALL)
    Collection<Patient> patients;

    @OneToMany(mappedBy = "doctor", orphanRemoval = true, cascade = CascadeType.ALL)
    Collection<Prescription> prescriptions;
    */

    public InTest() {}

    public InTest(String username, String password, String name, String roles, Boolean active ){
        this.username=username;
        this.password=password;
        this.name=name;
        this.roles=roles;
        this.active=active;
    }

    public InTest(String username, String password, String name, String roles) {
        this(username, password, name, roles, true);
    }

    /*
    public String toString(){
        return "Id: "+ id + "\nUsername: " + username + "\n" +
                "Name: " + username + "\n" +
                "Roles: " + username + "\n" ;
    }
    */



}
