AJS.bind("blueprint.wizard-register.ready", function () {
    function submitProjectSpace(e, state) {
        var dt = new Date();
        state.pageData.ContentPageTitle = dt.getFullYear() + "/" + (dt.getMonth() + 1) + " - Project " + state.pageData.name; //+ " " + state.pageData.spaceHomepageHeading;
        return Confluence.SpaceBlueprint.CommonWizardBindings.submit(e, state);
    }
    function submitTeamSpace(e, state) {
        state.pageData.ContentPageTitle = state.pageData.name; //+ " " + state.pageData.spaceHomepageHeading;
        return Confluence.SpaceBlueprint.CommonWizardBindings.submit(e, state);
    }
    function preRenderExampleSpace(e, state) {
        state.soyRenderContext['atlToken'] = AJS.Meta.get('atl-token');
        state.soyRenderContext['showSpacePermission'] = true;
    }
    Confluence.Blueprint.setWizard('com.example.plugins.tutorial.confluence.spacebp.spacebp:example-space-blueprint-item', function(wizard) {
        wizard.on("submit.exampleSpaceId", submitProjectSpace);
        wizard.on("pre-render.exampleSpaceId", preRenderExampleSpace);
        wizard.on("post-render.exampleSpaceId", Confluence.SpaceBlueprint.CommonWizardBindings.postRender);
    });
    Confluence.Blueprint.setWizard('com.example.plugins.tutorial.confluence.spacebp.spacebp:example-space-blueprint2-item', function(wizard) {
        wizard.on("submit.exampleSpaceId", submitTeamSpace);
        wizard.on("pre-render.exampleSpaceId", preRenderExampleSpace);
        wizard.on("post-render.exampleSpaceId", Confluence.SpaceBlueprint.CommonWizardBindings.postRender);
    });
});
