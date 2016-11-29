import { Attribute } from "./../Attributes/Attribute";
import { Step } from "./../Step/Step";

export class Stage{
    id: string;
    name: string;
    entityName: string;
    status: string;
    attribute: Attribute;
    steps: Array<Step>;
    requiredLevel: RequiredLevel;

    constructor(attribute: Attribute, id: string, name: string, entityName: string, status: string){
        this.attribute = attribute;
        this.id = id;
        this.name = name;
        this.status = status;
        this.requiredLevel = "none";
    }

    getCategory(){
        function getValue(){}
    }

    getEntityName(): string{
        return this.enityName;
    }

    getId(): string{
        return this.id;
    }

    getName(): string{
        return this.name;
    }

    getStatus(): string{
        return this.status;
    }

    getSteps(): Array<Step>{
        return steps;
    }

    getAttribute(){
        return this.attribute;
    }

    isRequired(): string{
        return this.requiredLevel;
    }


}