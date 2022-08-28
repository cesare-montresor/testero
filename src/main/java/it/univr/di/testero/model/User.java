package it.univr.di.testero.model;

import javax.persistence.*;


@Entity
@Table(name="user", schema = "testero_auth")
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    public Long id = 0L;

    public String username;
    public String password;
    public String name;
    public String roles;
    public Boolean active;

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
