package it.univr.di.testero.model.auth;
import javax.persistence.*;



@Entity
@Table(name="user", schema = "testero_auth")
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id = 0L;

    String username;
    String password;
    String name;
    String roles;
    Boolean active;

    /*
    @OneToMany(mappedBy = "mainDoctor", orphanRemoval = true, cascade = CascadeType.ALL)
    Collection<Patient> patients;

    @OneToMany(mappedBy = "doctor", orphanRemoval = true, cascade = CascadeType.ALL)
    Collection<Prescription> prescriptions;
    */

    public User() {}

    public User(String username, String password, String name, String roles, Boolean active ){
        this.username=username;
        this.password=password;
        this.name=name;
        this.roles=roles;
        this.active=active;
    }

    public User(String username, String password, String name, String roles) {
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
