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
    expect(TEST_globalValue).toBe(hgj);
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

