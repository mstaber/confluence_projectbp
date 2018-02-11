package com.example.plugins.tutorial.confluence.simplebp;

import com.atlassian.confluence.plugins.createcontent.api.contextproviders.AbstractBlueprintContextProvider;
import com.atlassian.confluence.plugins.createcontent.api.contextproviders.BlueprintContext;

public class MyContextProvider extends AbstractBlueprintContextProvider {
    @Override
    protected BlueprintContext updateBlueprintContext(BlueprintContext blueprintContext)
    {
        blueprintContext.put("vName", "Sherlock");
        return blueprintContext;
    }
}
