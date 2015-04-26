/// <reference path="ExampleEntity.js" />
/// <reference path="../Qunit/qunit.js" />
var Xrm;
QUnit.test("XrmPage: Attribute fireOnChange ", function (assert) {
    var pageControls = new Array();
    pageControls.push(CreateControlWithAttribute("abr_description", "", "none", "Description", false, false));
    pageControls.push(CreateSimpleControlWithAttribute("abr_type", 9500000001, "Type"));
    var page = new XrmPageMock("{607C16D1-7C53-4023-B20B-13E4F1C6A9D3}", pageControls, 1);
    Xrm = new XrmMock(page);
        
    OnLoad();

    assert.equal(Xrm.Page.getControl("abr_description").getVisible(), false, "Passed!");
    assert.equal(Xrm.Page.getAttribute("abr_description").getRequiredLevel(), "none", "Passed!");
    assert.equal(Xrm.Page.getAttribute("abr_description").getSubmitMode(), "never", "Passed!");

});


QUnit.test("XrmPage: Attribute fireOnChange ", function (assert) {
    var pageControls = new Array();
    pageControls.push(CreateControlWithAttribute("abr_description", "", "none", "Description", false, false));
    pageControls.push(CreateSimpleControlWithAttribute("abr_type", 9500000002, "Type"));
    var page = new XrmPageMock("{607C16D1-7C53-4023-B20B-13E4F1C6A9D3}", pageControls, 1);
    Xrm = new XrmMock(page);

    OnLoad();

    assert.equal(Xrm.Page.getControl("abr_description").getVisible(), true, "Passed!");
    assert.equal(Xrm.Page.getAttribute("abr_description").getRequiredLevel(), "required", "Passed!");
    assert.equal(Xrm.Page.getAttribute("abr_description").getSubmitMode(), "always", "Passed!");

});


