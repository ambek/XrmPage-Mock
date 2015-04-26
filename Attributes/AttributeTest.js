/// <reference path="../qunit.js" />
/// <reference path="Attribute.js" />

var TEST_globalValue;
QUnit.test("Attribute: addOnChange Is Implemented", function (assert) {
    var attr = new Attribute("abr_name", "abc");
    assert.notEqual(attr.addOnChange, null, "Passed!");
});

QUnit.test("Attribute: getEventSource Is Implemented", function (assert) {
    var attr = new Attribute("abr_name", "abc");
    assert.notEqual(attr.getEventSource, null, "Passed!");
});

QUnit.test("Attribute: getEventSource works", function (assert) {
    var attr = new Attribute("abr_name", "abc");
    var attr2 = attr.getEventSource();
    var attr = new Attribute("abr_name", "abc");
    assert.notEqual(attr.fireOnChange, null, "Passed!");
});

QUnit.test("Attribute: addOnChange works", function (assert) {
    var attr = new Attribute("abr_name", "abc");
    var testOnChange = function () { TEST_globalValue = "hgj"; };
    attr.addOnChange(testOnChange);
    attr.fireOnChange();
    assert.equal(TEST_globalValue, "hgj", "Passed!");
});

QUnit.test("Attribute: addOnChange use fieldctx", function (assert) {
    var attr = new Attribute("abr_name", "abc");
    attr.addOnChange(function(fieldCtx) {
        var fld = fieldCtx.getEventSource();
        TEST_globalValue = fld.getValue();
    });
    attr.fireOnChange();
    assert.equal(TEST_globalValue, "abc", "Passed!");
});

QUnit.test("Attribute: getName Is Implemented", function (assert) {
    var attr = new Attribute("abr_name", "abc");
    assert.notEqual(attr.getName, null, "Passed!");
});

QUnit.test("Attribute: getName works", function (assert) {
    var attr = new Attribute("abr_name", "abc");
    var name = attr.getName();
    assert.equal("abr_name", name   , "Passed!");
});

QUnit.test("Attribute: getValue Is Implemented", function (assert) {
    var attr = new Attribute("abr_name", "abc")
    assert.notEqual(attr.getValue, null, "Passed!");
});

QUnit.test("Attribute: getValue works", function (assert) {
    var attr = new Attribute("abr_name", "abc");
    assert.equal("abc", attr.getValue(), "Passed!");
});

QUnit.test("Attribute: getIsDirty Is Implemented", function (assert) {
    var attr = new Attribute("abr_name", "abc");
    assert.notEqual(attr.getIsDirty, null, "Passed!");
});

QUnit.test("Attribute: getIsDirty false at start", function (assert) {
    var attr = new Attribute("abr_name", "abc");
    assert.equal(attr.getIsDirty(), false, "Passed!");
});

QUnit.test("Attribute: getIsDirty true post setValue", function (assert) {
    var attr = new Attribute("abr_name", "abc");
    attr.setValue("sthsW");
    assert.equal(attr.getIsDirty(), true, "Passed!");
});

QUnit.test("Attribute: getIsDirty false post setValue the same", function (assert) {
    var attr = new Attribute("abr_name", "abc");
    attr.setValue("newValue");
    attr.setValue("abc");
    assert.equal(attr.getIsDirty(), false, "Passed!");
});

QUnit.test("Attribute: setValue works", function (assert) {
    var attr = new Attribute("abr_name", "abc");
    attr.setValue("test");
    assert.equal("test", attr.getValue(), "Passed!");
    assert.equal(attr.getIsDirty(), true, "Passed!");
});

QUnit.test("Attribute: setValue Is Implemented", function (assert) {
    var attr = new Attribute("abr_name", "abc");
    assert.notEqual(attr.setValue, null, "Passed!");
});

QUnit.test("Attribute: setSubmitMode Is Implemented", function (assert) {
    var attr = new Attribute("abr_name", "abc");
    assert.notEqual(attr.setSubmitMode, null, "Passed!");
});

QUnit.test("Attribute: getSubmitMode Is Implemented", function (assert) {
    var attr = new Attribute("abr_name", "abc");
    assert.notEqual(attr.getSubmitMode, null, "Passed!");
});

QUnit.test("Attribute: getSubmitMode works undefined", function (assert) {
    var attr = new Attribute("abr_name", "abc");
    assert.equal(attr.getSubmitMode(), "always", "Passed!");
});

QUnit.test("Attribute: getSubmitMode and setSubmintMode works", function (assert) {
    var attr = new Attribute("abr_name", "abc", "none", "always");
    assert.equal(attr.getSubmitMode(), "always", "Passed!");
    attr.setSubmitMode("never");
    assert.equal(attr.getSubmitMode(), "never", "Passed!");
});

QUnit.test("Attribute: setRequiredLevel Is Implemented", function (assert) {
    var attr = new Attribute("abr_name", "abc");
    assert.notEqual(attr.setRequiredLevel, null, "Passed!");
});

QUnit.test("Attribute: getRequiredLevel Is Implemented", function (assert) {
    var attr = new Attribute("abr_name", "abc");
    assert.notEqual(attr.getRequiredLevel, null, "Passed!");
});

QUnit.test("Attribute: getRequiredLevel works undefined", function (assert) {
    var attr = new Attribute("abr_name", "abc");
    assert.equal(attr.getRequiredLevel(), "none", "Passed!");
});

QUnit.test("Attribute: getRequiredLevel and setRequiredLevel works undefined", function (assert) {
    var attr = new Attribute("abr_name", "abc");
    attr.setRequiredLevel("required");
    assert.equal(attr.getRequiredLevel(), "required", "Passed!");
});





 