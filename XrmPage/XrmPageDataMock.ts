import { XrmPageDataProcessMock } from "..";
import { Attribute } from "./../Attributes/Attribute";
import { XrmPageDataEntityMock } from "./XrmPageDataEntityMock";
import { XrmPageDataProcessMock } from "../Process/XrmPageDataProcessMock";

export class XrmPageDataMock {
    entity: XrmPageDataEntityMock;
    // process: XrmPageDataProcessMock;
    constructor(id: string, attributes: Array<Attribute>) {
        this.entity = new XrmPageDataEntityMock(id, attributes);
        // this.process = new XrmPageDataProcessMock();
    }

    refresh(): never {
        throw Error("Refresh is not ready");
    }

    save(): never {
        throw Error("Save is not ready");
    }
}