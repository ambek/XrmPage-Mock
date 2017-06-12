import sinon = require("sinon");

interface Window{
    Xrm: any;
}

beforeEach(() => {
    jest.resetModules();
    (window as any).Xrm = {
        Page: {
            getAttribute: sinon.stub()
        }
    };
});

test("Attribute: getAttribute Is Implemented", () => {
    Xrm.Page.getAttribute("name");
    sinon.assert.calledWith((Xrm as any).Page.getAttribute, "name");
});
