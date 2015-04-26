/// <reference path="../Qunit/qunit.js" />
/// <reference path="../Control/Control.js" />
/// <reference path="../Attributes/Attribute.js" />
/// <reference path="XrmPage.js" />
QUnit.test("XrmPage: Xrm.Page is implemented", function (assert) {
    var pageControls = new Array();
    pageControls.push(CreateSimpleControlWithAttribute("abr_name", "test1", "This is Name"));
    pageControls.push(CreateSimpleControlWithAttribute("abr_status", "Active", "Status"));
    var page = new XrmPageMock("{607C16D1-7C53-4023-B20B-13E4F1C6A9D3}", pageControls, 1);
    var Xrm = new XrmMock(page);

    assert.notEqual(Xrm.Page, null, "Passed!");

});

QUnit.test("XrmPage: Xrm.Page.getAttribute is implemented", function (assert) {
    var pageControls = new Array();
    pageControls.push(CreateSimpleControlWithAttribute("abr_name", "test1", "This is Name"));
    pageControls.push(CreateSimpleControlWithAttribute("abr_status", "Active", "Status"));
    var page = new XrmPageMock(pageControls, 1);
    var Xrm = new XrmMock(page);

    assert.notEqual(Xrm.Page.getAttribute, null, "Passed!");

});

QUnit.test("XrmPage: Xrm.Page getControl is implemented", function (assert) {
    var pageControls = new Array();
    pageControls.push(CreateSimpleControlWithAttribute("abr_name", "test1", "This is Name"));
    pageControls.push(CreateSimpleControlWithAttribute("abr_status", "Active", "Status"));
    var page = new XrmPageMock("{607C16D1-7C53-4023-B20B-13E4F1C6A9D3}",pageControls, 1);
    var Xrm = new XrmMock(page);

    assert.notEqual(Xrm.Page.getControl, null, "Passed!");

});

QUnit.test("XrmPage: Xrm.Page.ui is implemeted", function (assert) {
    var pageControls = new Array();
    pageControls.push(CreateSimpleControlWithAttribute("abr_name", "test1", "This is Name"));
    pageControls.push(CreateSimpleControlWithAttribute("abr_status", "Active", "Status"));
    var page = new XrmPageMock("{607C16D1-7C53-4023-B20B-13E4F1C6A9D3}", pageControls, 1);
    var Xrm = new XrmMock(page);

    assert.notEqual(Xrm.Page.ui, null, "Passed!");

});

QUnit.test("XrmPage: Xrm.Page.ui.getFormType is implemeted", function (assert) {
    var pageControls = new Array();
    pageControls.push(CreateSimpleControlWithAttribute("abr_name", "test1", "This is Name"));
    pageControls.push(CreateSimpleControlWithAttribute("abr_status", "Active", "Status"));
    var page = new XrmPageMock(pageControls, 1);
    var Xrm = new XrmMock(page);

    assert.notEqual(Xrm.Page.ui.getFormType, null, "Passed!");

});

QUnit.test("XrmPage: getAttribute works", function (assert) {
    var pageControls = new Array();
    pageControls.push(CreateSimpleControlWithAttribute("abr_name", "test1", "This is Name"));
    pageControls.push(CreateSimpleControlWithAttribute("abr_status", "Active", "Status"));
    var page = new XrmPageMock("{607C16D1-7C53-4023-B20B-13E4F1C6A9D3}",pageControls, 1);
    var Xrm = new XrmMock(page);
    
    var attributeTest = Xrm.Page.getAttribute("abr_name");
    assert.equal(attributeTest.getValue(), "test1", "Passed!");
    attributeTest = Xrm.Page.getAttribute("abr_status");
    assert.equal(attributeTest.getValue(), "Active", "Passed!");
});

QUnit.test("XrmPage: getControl works", function (assert) {
    var pageControls = new Array();
    pageControls.push(CreateSimpleControlWithAttribute("abr_name", "test1", "This is Name"));
    pageControls.push(CreateSimpleControlWithAttribute("abr_status", "Active", "Status"));
    var page = new XrmPageMock("{607C16D1-7C53-4023-B20B-13E4F1C6A9D3}",pageControls, 1);
    var Xrm = new XrmMock(page);
    controlTest = Xrm.Page.getControl("abr_name");
    assert.equal(controlTest.getLabel(), "This is Name", "Passed!");
});


QUnit.test("XrmPage: Attribute is dirty on page ", function (assert) {
    var pageControls = new Array();
    pageControls.push(CreateSimpleControlWithAttribute("abr_name", "test1", "This is Name"));
    pageControls.push(CreateSimpleControlWithAttribute("abr_status", "Active", "Status"));
    var page = new XrmPageMock("{607C16D1-7C53-4023-B20B-13E4F1C6A9D3}", pageControls, 1);
    var Xrm = new XrmMock(page);

    Xrm.Page.getAttribute("abr_name").setValue("nowa wartość");

    assert.equal(Xrm.Page.getAttribute("abr_name").getIsDirty(), true, "Passed!");
});


QUnit.test("XrmPage: Attribute fireOnChange ", function (assert) {
    var pageControls = new Array();
    pageControls.push(CreateControlWithAttribute("abr_description", "", "none", "Description", false, false));
    pageControls.push(CreateSimpleControlWithAttribute("abr_type", 9500000001, "Type"));
    var page = new XrmPageMock("{607C16D1-7C53-4023-B20B-13E4F1C6A9D3}", pageControls, 1);
    var Xrm = new XrmMock(page);
    function FOCType(fldCtx) {
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

    Xrm.Page.getAttribute("abr_type").addOnChange(FOCType);
    Xrm.Page.getAttribute("abr_type").fireOnChange();

    assert.equal(Xrm.Page.getControl("abr_description").getVisible(), false, "Passed!");
    assert.equal(Xrm.Page.getAttribute("abr_description").getRequiredLevel(), "none", "Passed!");
    assert.equal(Xrm.Page.getAttribute("abr_description").getSubmitMode(), "never", "Passed!");

    Xrm.Page.getAttribute("abr_type").setValue(9500000002);
    Xrm.Page.getAttribute("abr_type").fireOnChange();

    assert.equal(Xrm.Page.getControl("abr_description").getVisible(), true, "Passed!");
    assert.equal(Xrm.Page.getAttribute("abr_description").getRequiredLevel(), "required", "Passed!");
    assert.equal(Xrm.Page.getAttribute("abr_description").getSubmitMode(), "always", "Passed!");

});

