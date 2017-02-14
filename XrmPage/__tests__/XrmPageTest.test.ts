import * as XrmMock from "./../XrmMock";
import { CreateSimpleControlWithAttribute, CreateControlWithAttribute } from "./../../Control/Control";

beforeEach(() => {
    jest.resetModules();
    let pageControls = [];
    pageControls.push(CreateSimpleControlWithAttribute("abr_name", "test1", "This is Name"));
    pageControls.push(CreateSimpleControlWithAttribute("abr_status", "Active", "Status"));
    pageControls.push(CreateSimpleControlWithAttribute("abr_type", 9500000001, "Type"));
    pageControls.push(CreateControlWithAttribute("abr_description", "", "none", "Description", false, false));
    const page = new XrmMock.XrmPageMock("{607C16D1-7C53-4023-B20B-13E4F1C6A9D3}", pageControls, 1);
    const Xrm = new XrmMock.XrmPage(page);

    (<any>window).Xrm = Xrm;
});

test("XrmPage: Xrm.Page is implemented", () => {
    expect(Xrm.Page).not.toBe(null);
});

test("XrmPage: Xrm.Page.getAttribute is implemented", () => {
    expect(Xrm.Page.getAttribute).not.toBe(null);
});

test("XrmPage: Xrm.Page getControl is implemented", () => {
    expect(Xrm.Page.getControl).not.toBe(null);
});

test("XrmPage: Xrm.Page.ui is implemeted", () => {
    expect(Xrm.Page.ui).not.toBe(null);
});

test("XrmPage: getAttribute works", () => {
    const attributeTest1 = Xrm.Page.getAttribute<Xrm.Page.StringAttribute>("abr_name");
    expect(attributeTest1.getValue()).toBe("test1");
    const attributeTest2 = Xrm.Page.getAttribute<Xrm.Page.StringAttribute>("abr_status");
    expect(attributeTest2.getValue()).toBe("Active");
});

test("XrmPage: getControl works", () => {
    const controlTest1 = Xrm.Page.getControl("abr_name");
    expect(controlTest1.getLabel()).toBe("This is Name");
});

test("XrmPage: Attribute fireOnChange", () => {
    function FOCType(fldCtx) {
        if (fldCtx.getEventSource() == null) {
            return;
        }

        if (fldCtx.getEventSource().getValue() === 9500000002) {
            Xrm.Page.getControl("abr_description").setVisible(true);
            Xrm.Page.getAttribute("abr_description").setRequiredLevel("required");
            Xrm.Page.getAttribute("abr_description").setSubmitMode("always");
        } else {
            Xrm.Page.getControl("abr_description").setVisible(false);
            Xrm.Page.getAttribute("abr_description").setRequiredLevel("none");
            Xrm.Page.getAttribute("abr_description").setSubmitMode("never");
        }
    }
    Xrm.Page.getAttribute<Xrm.Page.NumberAttribute>("abr_type").addOnChange(FOCType);
    Xrm.Page.getAttribute<Xrm.Page.NumberAttribute>("abr_type").fireOnChange();

    expect(Xrm.Page.getControl("abr_description").getVisible()).toBe(false);
    expect(Xrm.Page.getAttribute("abr_description").getRequiredLevel()).toBe("none");
    expect(Xrm.Page.getAttribute("abr_description").getSubmitMode()).toBe("never");

    Xrm.Page.getAttribute<Xrm.Page.OptionSetAttribute>("abr_type").setValue(9500000002);
    Xrm.Page.getAttribute("abr_type").fireOnChange();

    expect(Xrm.Page.getControl("abr_description").getVisible()).toBe(true);
    expect(Xrm.Page.getAttribute("abr_description").getRequiredLevel()).toBe("required");
    expect(Xrm.Page.getAttribute("abr_description").getSubmitMode()).toBe("always");
});