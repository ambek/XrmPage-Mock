import { XrmAttribute } from "../Attributes/XrmAttribute";
import { XrmPageDataEntityMock } from "./XrmPageDataEntityMock";

export class XrmPageDataMock {
    entity: XrmPageDataEntityMock;
    // process: XrmPageDataProcessMock;
    constructor(id: string, attributes: Array<XrmAttribute>) {
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