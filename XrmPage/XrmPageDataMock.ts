import { Attribute } from "./../Attributes/Attribute";
import { XrmPageDataEntityMock } from "./XrmPageDataEntityMock";

export class XrmPageDataMock {
    entity: XrmPageDataEntityMock;
    constructor(id: string, attributes: Array<Attribute>) {
        this.entity = new XrmPageDataEntityMock(id, attributes);
    }

    refresh(): never {
        throw Error("Refresh is not ready");
    }

    save(): never {
        throw Error("Save is not ready");
    }
}