function abr_typeOnChange(fldCtx) {
    if (fldCtx.getEventSource() == null)
        return;
    if (fldCtx.getEventSource().getValue() == 9500000002) {
        Xrm.Page.getControl("abr_description").setVisible(true);
        Xrm.Page.getAttribute("abr_description").setRequiredLevel("required");
        Xrm.Page.getAttribute("abr_description").setSubmitMode("always");
    }
    else {
        Xrm.Page.getControl("abr_description").setVisible(false);
        Xrm.Page.getAttribute("abr_description").setRequiredLevel("none");
        Xrm.Page.getAttribute("abr_description").setSubmitMode("never");

    }
};

function OnLoad() {
    Xrm.Page.getAttribute("abr_type").addOnChange(abr_typeOnChange);
    Xrm.Page.getAttribute("abr_type").fireOnChange();
}