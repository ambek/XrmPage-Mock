import { XrmAttribute } from "../Attributes/XrmAttribute";
import { XrmEntityAttributes } from "../Entity/XrmEntityAttributes";

export class XrmPageDataEntityMock {
    id: string;
    attributes: any;

    constructor(id: string, attributes: Array<XrmAttribute>) {
        this.id = id;
        this.attributes = new XrmEntityAttributes(attributes);
    }
}