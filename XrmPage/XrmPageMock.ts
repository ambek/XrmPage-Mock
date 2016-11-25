export class XrmPageMock {
    data: XrmPageDataMock;
    constructor(id, controls, formType) {
        const attributes = controls.map(control => {
            return control.getAttribute();
        });
        this.data = new XrmPageDataMock(id, attributes);
    }

    getAttribute(attributeName: string): Attribute {
        return this.data.entity.attributes.get(attributeName);
    }

    getControl(controlName: string): Control {
        return this.ui.controls.get(controlName);
    }
}