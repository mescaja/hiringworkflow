package org.acme.travels.workitems;

import org.kie.kogito.process.impl.DefaultWorkItemHandlerConfig;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class UserWorkItemHandlerConfig extends DefaultWorkItemHandlerConfig {

    {
        register("GetUserByName", new UserWorkItemHandler());
    }
}
