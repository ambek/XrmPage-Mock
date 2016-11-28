import { Attribute } from "./../Attribute";

beforeEach(() => {
    jest.resetModules();
    const attr = new Attribute("abr_name", "abc", null, null);
    (<any>window).attr = attr;
    (<any>window).TEST_globalValue = "";
});

it("Attribute: addOnChange Is Implemented", () => {
    expect(attr.addOnChange).not.toBe(null);
});

it("Attribute: getEventSource Is Implemented", () => {
    expect(attr.getEventSource).not.toBe(null);
});

it("Attribute: getEventSource works", () => {
    expect(attr.getEventSource).not.toBe(null);
});

it("Attribute: addOnChange use fieldctx", () => {
    var testOnChange = function () { TEST_globalValue = "hgj"; };
    attr.addOnChange(testOnChange);
    attr.fireOnChange();
    expect(TEST_globalValue).toBe("hgj");
});

it("Attribute: getName Is Implemented", () => {
    expect(attr.getName).not.toBe(null);
});

it("Attribute: getValue Is Implemented", () => {
    expect(attr.getValue).not.toBe(null);
});

it("Attribute: getValue works", () => {
    expect(attr.getValue()).toBe("abc");
});

it("Attribute: getIsDirty Is Implemented", () => {
    expect(attr.getIsDirty).not.toBe(null);
});

it("Attribute: getIsDirty false at start", () => {
    expect(attr.getIsDirty).toBe(false);
});

it("Attribute: getIsDirty false at start", () => {
    expect(attr.getIsDirty).toBe(false);
});

it("Attribute: getIsDirty true post setValue", () => {
    attr.setValue("sthsW");
    expect(attr.getIsDirty).toBe(true);
});

it("Attribute: setValue Is Implemented", () => {
    expect(attr.setValue).not.toBe(null);
});

it("Attribute: getIsDirty false post setValue the same", () => {
    attr.setValue("newValue");
    attr.setValue("abc");
    expect(attr.getIsDirty).toBe(false);
});

it("Attribute: setValue works", () => {
    attr.setValue("test");
    expect(attr.getValue()).toBe("test");
    expect(attr.getIsDirty).toBe(true);
});

it("Attribute: setSubmitMode Is Implemented", () => {
    expect(attr.setSubmitMode).not.toBe(null);
});

it("Attribute: getSubmitMode works undefined", () => {
    expect(attr.getSubmitMode()).toBe("always");
});

it("Attribute: getSubmitMode and setSubmintMode works", () => {
    attr.setSubmitMode("never");
    expect(attr.getSubmitMode()).toBe("never");
});

it("Attribute: setRequiredLevel Is Implemented", () => {
    expect(attr.setRequiredLevel).not.toBe(null);
});

it("Attribute: getRequiredLevel Is Implemented", () => {
    expect(attr.getRequiredLevel).not.toBe(null);
});

it("Attribute: getRequiredLevel works undefined", () => {
    expect(attr.getRequiredLevel).toBe("none");
});

it("Attribute: getRequiredLevel and setRequiredLevel works undefined", () => {
    attr.setRequiredLevel("required");
    expect(attr.getRequiredLevel).toBe("required");
});


