package it.univr.di.testero.repository.auth;
import it.univr.di.testero.model.auth.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository  extends CrudRepository<User, Long> {
    List<User> findAll();
    User findById(long id);
    List <User> findByRolesContains(String roles);
    Optional<User> findByUsername(String username);
    Optional<User> findByUsernameAndPassword(String username, String password);
}