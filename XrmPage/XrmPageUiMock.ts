import { EntityControl } from "./../Entity/EntityControl";
import { Control } from "./../Control/Control";
export class XrmPageUiMock {
    collection: Array<Control>;
    formType: number;
    controls: EntityControl;

    constructor(controls: Array<Control>, formType: number) {
        this.collection = controls;
        this.formType = formType;
        this.controls = new EntityControl(controls);
    }

    getFormType(): number {
        return this.formType;
    }
}