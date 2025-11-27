package org.acme.travels.rest;

import org.slf4j.LoggerFactory;
import org.acme.travels.User;

import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class UserService {

    private static final org.slf4j.Logger LOG = LoggerFactory.getLogger(UserService.class);

    public User getUser(String name) {
        if ("test".equals(name)) {
            User user = new User();
            user.setLastName(name);
            LOG.info("User {} found", name);
            return user;
        }
        LOG.info("User {} not found", name);
        return null;
    }
}
