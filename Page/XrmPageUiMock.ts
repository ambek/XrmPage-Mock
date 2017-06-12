import { XrmEntityControl } from "./../Entity/XrmEntityControl";
import { XrmControl } from "./../Control/XrmControl";
export class XrmPageUiMock {
    collection: Array<XrmControl>;
    formType: number;
    controls: XrmEntityControl;

    constructor(controls: Array<XrmControl>, formType: number) {
        this.collection = controls;
        this.formType = formType;
        this.controls = new XrmEntityControl(controls);
    }

    getFormType(): number {
        return this.formType;
    }
}