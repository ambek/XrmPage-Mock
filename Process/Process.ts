import { Stage } from "./../Stage/Stage";

export class Process{
    id: string;
    name: string;
    stages: Array<Stage>;
    rendered: boolean;

    constructor(stages: Array<Stage>, id: string, name:string, rendered: boolean){
        this.stages = stages;
        this.id = id;
        this.name = name;
        this.rendered = rendered;
    }

    getId(): string{
        return this.id;
    }

    getName(): string{
        return this.name;
    }

    getStages(): Array<Stage>{
        return this.stages;
    }

    isRendered(): boolean{
        return this.rendered;
    }
}