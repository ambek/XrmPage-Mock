import { XrmStage } from "../Stage/XrmPageDataStage";

export class XrmProcess {
    id: string;
    name: string;
    stages: Array<XrmStage>;
    rendered: boolean;

    constructor(stages: Array<XrmStage>, id: string, name:string, rendered: boolean) {
        this.stages = stages;
        this.id = id;
        this.name = name;
        this.rendered = rendered;
    }

    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getStages(): Array<XrmStage> {
        return this.stages;
    }

    isRendered(): boolean {
        return this.rendered;
    }
}