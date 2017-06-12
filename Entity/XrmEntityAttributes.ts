import { XrmAttribute } from "../Attributes/XrmAttribute";
export class XrmEntityAttributes {
    collection: Array<XrmAttribute>;
    constructor(attributes: Array<XrmAttribute>) {
        this.collection = attributes;
    }

    get(attributeName) {
        for (let attribute of this.collection) {
            if (attribute.getName() === attributeName) {
                return attribute;
            }
        };
        return null;
    }

    forEach(): never {
        throw Error("forEach is not ready");
    }
}