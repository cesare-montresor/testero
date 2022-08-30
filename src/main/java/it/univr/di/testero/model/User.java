package it.univr.di.testero.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Table(name="user", schema = "testero_auth")
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Getter
    public Long id = 0L;

    @Getter @Setter
    private String username;
    @Getter @Setter
    private String password;
    @Getter @Setter
    private String name;
    @Getter @Setter
    private String roles;
    @Getter @Setter
    private Boolean active;

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
}
