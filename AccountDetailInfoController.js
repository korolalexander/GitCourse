({
    doInit : function (component, event, helper) {
    },
    delete : function (component) {
        component.delete(component.get('v.record'));
    },
    clearCard : function (component, event, helper) {
        let params = event.getParam('arguments');
        if(params) helper.clearRecord(component, helper, params.isSure);
    },
});