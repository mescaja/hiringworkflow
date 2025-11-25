package org.kie.kogito.hr;

import org.kie.kogito.process.impl.DefaultWorkItemHandlerConfig;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class UserWorkItemHandlerConfig extends DefaultWorkItemHandlerConfig {

    {
        register("GetUserByName", new UserWorkItemHandler());
    }
}
