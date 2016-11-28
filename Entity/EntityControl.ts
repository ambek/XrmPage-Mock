import { Control } from "./../Control/Control";
export class EntityControl {
    collection: Array<Control>;
    constructor(controls: Array<Control>) {
        this.collection = controls;
    }

    get(controlName) {
        for (let control of this.collection) {
            if (control.getName() === controlName) {
                return control;
            }
        };
        return null;
    }

    forEach() {
        throw Error("forEach is not ready");
    }
}