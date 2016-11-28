import { Attribute } from "./../Attributes/Attribute";
import { EntityAttributes } from "../Entity/EntityAttributes";

export class XrmPageDataEntityMock {
    id: string;
    attributes: any;

    constructor(id: string, attributes: Array<Attribute>) {
        this.id = id;
        this.attributes = new EntityAttributes(attributes);
    }
}