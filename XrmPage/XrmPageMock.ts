import { XrmPageUiMock } from "./XrmPageUiMock";
import { Control } from "./../Control/Control";
import { Attribute } from "./../Attributes/Attribute";
import { XrmPageDataMock } from "./XrmPageDataMock";

export class XrmPageMock {
    data: XrmPageDataMock;
    ui: XrmPageUiMock;

    constructor(id, controls, formType) {
        const attributes = controls.map(control => {
            return control.getAttribute();
        });
        this.data = new XrmPageDataMock(id, attributes);
        this.ui = new XrmPageUiMock(controls, formType);
    }

    getAttribute(attributeName: string): Attribute {
        return this.data.entity.attributes.get(attributeName);
    }

    getControl(controlName: string): Control {
        return this.ui.controls.get(controlName);
    }
}