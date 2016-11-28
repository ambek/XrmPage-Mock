import { Attribute } from "./../Attributes/Attribute";
export class EntityAttributes {
    collection: Array<Attribute>;
    constructor(attributes: Array<Attribute>) {
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