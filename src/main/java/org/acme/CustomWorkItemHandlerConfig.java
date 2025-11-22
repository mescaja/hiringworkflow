package org.acme;

import org.kie.kogito.process.impl.DefaultWorkItemHandlerConfig;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class CustomWorkItemHandlerConfig extends DefaultWorkItemHandlerConfig {

    {
        register("MyConcatDefinitions", new MyConcatWorkItemHandler());
    }
}