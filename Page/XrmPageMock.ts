import { XrmPageUiMock } from "./XrmPageUiMock";
import { XrmEntityControl } from "../Entity/XrmEntityControl";
import { XrmAttribute } from "../Attributes/XrmAttribute";
import { XrmPageDataMock } from "../Data/XrmPageDataMock";

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

    getAttribute(attributeName: string): XrmAttribute {
        return this.data.entity.attributes.get(attributeName);
    }

    getControl(controlName: string): XrmEntityControl {
        return this.ui.controls.get(controlName);
    }
}