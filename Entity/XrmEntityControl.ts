import { XrmControl } from "../Control/XrmControl";
export class XrmEntityControl {
    collection: Array<XrmControl>;
    constructor(controls: Array<XrmControl>) {
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