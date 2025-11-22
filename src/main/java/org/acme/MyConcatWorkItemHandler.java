package org.acme;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.kie.kogito.internal.process.workitem.KogitoWorkItem;
import org.kie.kogito.internal.process.workitem.KogitoWorkItemHandler;
import org.kie.kogito.internal.process.workitem.KogitoWorkItemManager;
import org.kie.kogito.internal.process.workitem.WorkItemTransition;
import org.kie.kogito.process.workitems.impl.DefaultKogitoWorkItemHandler;
import org.slf4j.LoggerFactory;

public class MyConcatWorkItemHandler extends DefaultKogitoWorkItemHandler {

    private static final org.slf4j.Logger LOG = LoggerFactory.getLogger(MyConcatWorkItemHandler.class);

    @Override
    public Optional<WorkItemTransition> activateWorkItemHandler(KogitoWorkItemManager manager, KogitoWorkItemHandler handler, KogitoWorkItem workItem, WorkItemTransition transition) {

        for (String parameter : workItem.getParameters().keySet()) {
            LOG.info(parameter + " = " + workItem.getParameters().get(parameter));
 }

        Map<String, Object> results = new HashMap<String, Object>();

        String firstName = (String) workItem.getParameter("FirstName");
        String lastName = (String) workItem.getParameter("LastName");
        String fullName = firstName + " " + lastName;

        results.put("FullName", fullName);

        return Optional.of(handler.completeTransition(workItem.getPhaseStatus(), results));

 }
    @Override
    public Optional<WorkItemTransition> abortWorkItemHandler(KogitoWorkItemManager manager, KogitoWorkItemHandler handler, KogitoWorkItem workItem, WorkItemTransition transition) {
                LOG.info("Aborting work item " + workItem);
        return Optional.of(this.workItemLifeCycle.newTransition("abort", workItem.getPhaseStatus(), workItem.getResults()));
 }
}