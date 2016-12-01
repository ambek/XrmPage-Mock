import { Attribute } from "./../../Attributes/Attribute";
import { Control, CreateControlWithAttribute } from "./../Control";

declare var ctrl: Control;
declare var attr: Attribute;

beforeEach(() => {
    jest.resetModules();
    const attr= new Attribute("abr_name", "abc", null, null);
    const ctrl = new Control(attr, "abr_name", "Label", false, true);
    (<any>window).attr = attr;
    (<any>window).ctrl = ctrl;
});

test("Control: getName Is Implemented", () => {
    expect(ctrl.getName).not.toBe(null);
});

test("Control: getName Is Implemented", () => {
    expect(ctrl.getName()).toBe("abr_name");
});

test("Control: getVisible Is Implemented", () => {
    expect(ctrl.getVisible).not.toBe(null);
});

test("Control: getVisible works true", () => {
    expect(ctrl.getVisible()).toBe(true);
});

test("Control: getVisible works false", () => {
    ctrl.setVisible(false);
    expect(ctrl.getVisible()).toBe(false);
});

test("Control: setVisible Is Implemented", () => {
    expect(ctrl.setVisible).not.toBe(null);
});

test("Control: setVisible works", () => {
    ctrl.setVisible(false);
    expect(ctrl.getVisible()).toBe(false);
    ctrl.setVisible(true);
    expect(ctrl.getVisible()).toBe(true);
});

test("Control: getLabel Is Implemented", () => {
    expect(ctrl.getLabel).not.toBe(null);
});

test("Control: getLabel works", () => {
    expect(ctrl.getLabel()).toBe("Label");
});

test("Control: setLabel Is Implemented", () => {
    expect(ctrl.setLabel).not.toBe(null);
});

test("Control: setVisible works", () => {
    ctrl.setLabel("Label_2");
    expect(ctrl.getLabel()).toBe("Label_2");
});

test("Control: getAttribute Is Implemented", () => {
    expect(ctrl.getAttribute).not.toBe(null);
});

test("Control: getAttribute works", () => {
    expect(ctrl.getAttribute()).toBe(attr);
});

test("Control: getDisabled Is Implemented", () => {
    expect(ctrl.getDisabled).not.toBe(null);
});

test("Control: setDisabled Is Implemented", () => {
    expect(ctrl.setDisabled).not.toBe(null);
});

test("Control: setDisabled and getDisabled works", () => {
    ctrl.setDisabled(true);
    expect(ctrl.getDisabled()).toBe(true);
});

test("Control: CreateControlWithAttribute is implemented", () => {
    expect(CreateControlWithAttribute).not.toBe(null);
});

test("Control: CreateControlWithAttribute works", () => {
    var ctrl2 = CreateControlWithAttribute("abr_name", "abc", "none", "Label", false, true);
    var attr2 = ctrl2.getAttribute();
    expect(attr2.getValue()).toBe("abc");
    expect(attr2.getSubmitMode()).toBe("dirty");
    expect(attr2.getRequiredLevel()).toBe("none");
    expect(ctrl2.getLabel()).toBe("Label");
    expect(ctrl2.getName()).toBe("abr_name");
});