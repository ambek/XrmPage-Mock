import { Attribute } from "./../Attribute";

declare var attr: Attribute;
declare var TEST_globalValue: string;

beforeEach(() => {
    jest.resetModules();
    const attr = new Attribute("abr_name", "abc", null, null);
    (<any>window).attr = attr;
    (<any>window).TEST_globalValue = "";
});

test("Attribute: addOnChange Is Implemented", () => {
    expect(attr.addOnChange).not.toBe(null);
});

test("Attribute: getEventSource Is Implemented", () => {
    expect(attr.getEventSource).not.toBe(null);
});

test("Attribute: getEventSource works", () => {
    expect(attr.getEventSource).not.toBe(null);
});

test("Attribute: addOnChange use fieldctx", () => {
    var testOnChange = function () { TEST_globalValue = "hgj"; };
    attr.addOnChange(testOnChange);
    attr.fireOnChange();
    expect(TEST_globalValue).toBe("hgj");
});

test("Attribute: getName Is Implemented", () => {
    expect(attr.getName).not.toBe(null);
});

test("Attribute: getValue Is Implemented", () => {
    expect(attr.getValue).not.toBe(null);
});

test("Attribute: getValue works", () => {
    expect(attr.getValue()).toBe("abc");
});

test("Attribute: getIsDirty Is Implemented", () => {
    expect(attr.getIsDirty).not.toBe(null);
});

test("Attribute: getIsDirty false at start", () => {
    expect(attr.getIsDirty()).toBe(false);
});

test("Attribute: getIsDirty false at start", () => {
    expect(attr.getIsDirty()).toBe(false);
});

test("Attribute: getIsDirty true post setValue", () => {
    attr.setValue("sthsW");
    expect(attr.getIsDirty()).toBe(true);
});

test("Attribute: setValue Is Implemented", () => {
    expect(attr.setValue).not.toBe(null);
});

test("Attribute: getIsDirty false post setValue the same", () => {
    attr.setValue("newValue");
    attr.setValue("abc");
    expect(attr.getIsDirty()).toBe(false);
});

test("Attribute: setValue works", () => {
    attr.setValue("test");
    expect(attr.getValue()).toBe("test");
    expect(attr.getIsDirty()).toBe(true);
});

test("Attribute: setSubmitMode Is Implemented", () => {
    expect(attr.setSubmitMode).not.toBe(null);
});

test("Attribute: getSubmitMode works undefined", () => {
    expect(attr.getSubmitMode()).toBe("dirty");
});

test("Attribute: getSubmitMode and setSubmintMode works", () => {
    attr.setSubmitMode("never");
    expect(attr.getSubmitMode()).toBe("never");
});

test("Attribute: setRequiredLevel Is Implemented", () => {
    expect(attr.setRequiredLevel).not.toBe(null);
});

test("Attribute: getRequiredLevel Is Implemented", () => {
    expect(attr.getRequiredLevel).not.toBe(null);
});

test("Attribute: getRequiredLevel works undefined", () => {
    expect(attr.getRequiredLevel()).toBe("none");
});

test("Attribute: getRequiredLevel and setRequiredLevel works undefined", () => {
    attr.setRequiredLevel("required");
    expect(attr.getRequiredLevel()).toBe("required");
});


