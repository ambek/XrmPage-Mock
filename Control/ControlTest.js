/// <reference path="../Attributes/Attribute.js" />
/// <reference path="../qunit.js" />
/// <reference path="Control.js" />
QUnit.test("Control: getName Is Implemented", function (assert) {
    var attr= new Attribute("abr_name", "abc");
    var ctrl = new Control(attr, "abr_name", "Label", false, true);
    assert.notEqual(ctrl.getName, null, "Passed!");
});

QUnit.test("Control: getName works", function (assert) {
    var attr= new Attribute("abr_name", "abc");
    var ctrl = new Control(attr, "abr_name", "Label", false, true);
    assert.equal(ctrl.getName(), "abr_name", "Passed!");
});

QUnit.test("Control: getVisible Is Implemented", function (assert) {
    var attr= new Attribute("abr_name", "abc");
    var ctrl = new Control(attr, "abr_name", "Label", false, true);
    assert.notEqual(ctrl.getVisible, null, "Passed!");
});

QUnit.test("Control: getVisible works true", function (assert) {
    var attr= new Attribute("abr_name", "abc");
    var ctrl = new Control(attr, "abr_name", "Label", false, true);
    assert.equal(ctrl.getVisible(), true, "Passed!");
});

QUnit.test("Control: getVisible works false", function (assert) {
    var attr= new Attribute("abr_name", "abc");
    var ctrl = new Control(attr, "abr_name", "Label", false, false);
    assert.equal(ctrl.getVisible(), false, "Passed!");
});

QUnit.test("Control: setVisible Is Implemented", function (assert) {
    var attr= new Attribute("abr_name", "abc");
    var ctrl = new Control(attr, "abr_name", "Label", false, true);
    assert.notEqual(ctrl.setVisible, null, "Passed!");
});

QUnit.test("Control: setVisible works", function (assert) {
    var attr= new Attribute("abr_name", "abc");
    var ctrl = new Control(attr, "abr_name", "Label", false, true);
    ctrl.setVisible(false);
    assert.equal(ctrl.getVisible(), false, "Passed!");
    ctrl.setVisible(true);
    assert.equal(ctrl.getVisible(), true, "Passed!");
});

QUnit.test("Control: getLabel Is Implemented", function (assert) {
    var attr= new Attribute("abr_name", "abc");
    var ctrl = new Control(attr, "abr_name", "Label", false, true);
    assert.notEqual(ctrl.getLabel, null, "Passed!");
});

QUnit.test("Control: getLabel works", function (assert) {
    var attr= new Attribute("abr_name", "abc");
    var ctrl = new Control(attr, "abr_name", "Label", false, true);
    assert.equal(ctrl.getLabel(), "Label", "Passed!");
});

QUnit.test("Control: setLabel Is Implemented", function (assert) {
    var attr= new Attribute("abr_name", "abc");
    var ctrl = new Control(attr, "abr_name", "Label", false, true);
    assert.notEqual(ctrl.setLabel, null, "Passed!");
});

QUnit.test("Control: setLabel works", function (assert) {
    var attr= new Attribute("abr_name", "abc");
    var ctrl = new Control(attr, "abr_name", "Label", false, true);
    ctrl.setLabel("Label_2");
    assert.equal(ctrl.getLabel(), "Label_2", "Passed!");
});

QUnit.test("Control: getAttribute Is Implemented", function (assert) {
    var attr= new Attribute("abr_name", "abc");
    var ctrl = new Control(attr, "abr_name", "Label", false, true);
    assert.notEqual(ctrl.getAttribute, null, "Passed!");
});


QUnit.test("Control: getAttribute works", function (assert) {
    var attr= new Attribute("abr_name", "abc");
    var ctrl = new Control(attr, "abr_name", "Label", false, true);
    ctrl.setLabel("Label_2");
    assert.equal(ctrl.getAttribute(), attr, "Passed!");
});

QUnit.test("Control: getDisabled Is Implemented", function (assert) {
    attr = new Attribute("abr_name", "testValue");
    var ctrl = new Control("abr_name", "Label", false, true);
    assert.notEqual(ctrl.getDisabled, null, "Passed!");
});

QUnit.test("Control: setDisabled Is Implemented", function (assert) {
    attr = new Attribute("abr_name", "testValue");
    var ctrl = new Control("abr_name", "Label", false, true);
    assert.notEqual(ctrl.setDisabled, null, "Passed!");
});

QUnit.test("Control: setDisabled and getDisabled works", function (assert) {
    attr = new Attribute("abr_name", "testValue");
    var ctrl = new Control("abr_name", "Label", false, true);
    ctrl.setDisabled(true);
    assert.equal(ctrl.getDisabled(), true, "Passed!");
});

QUnit.test("Control: CreateControlWithAttribute is implemented", function (assert) {
    assert.notEqual(CreateControlWithAttribute, null, "Passed!");
});

QUnit.test("Control: CreateControlWithAttribute is implemented", function (assert) {
    //debugger;
    var ctrl = CreateControlWithAttribute("abr_name", "abc", "none", "Label", false, true);
    var attr = ctrl.getAttribute();
    assert.equal(attr.getValue(), 'abc', "Passed!");
    assert.equal(attr.getSubmitMode(), 'dirty', "Passed!");
    assert.equal(attr.getRequiredLevel(), 'none', "Passed!");
    assert.equal(ctrl.getLabel(), 'Label', "Passed!");
    assert.equal(attr.getName(), 'abr_name', "Passed!");
});


