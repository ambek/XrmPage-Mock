import { XrmEntityControle } from "./../Entity/XrmEntityControle";
export class XrmPageUiMock {
    collection: Array<XrmEntityControle>;
    formType: number;
    controls: XrmEntityControle;

    constructor(controls: Array<XrmEntityControle>, formType: number) {
        this.collection = controls;
        this.formType = formType;
        this.controls = new XrmEntityControle(controls);
    }

    getFormType(): number {
        return this.formType;
    }
}