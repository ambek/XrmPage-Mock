import { XrmAttribute } from "../Attributes/XrmAttribute";
import { RequiredLevel } from "../Types/RequiredLevel";
import { Step } from "../Step/Step";

export class XrmStage {
    id: string;
    name: string;
    entityName: string;
    status: string;
    attribute: XrmAttribute;
    steps: Array<Step>;
    requiredLevel: RequiredLevel;

    constructor(attribute: XrmAttribute, id: string, name: string, entityName: string, status: string) {
        this.attribute = attribute;
        this.id = id;
        this.name = name;
        this.status = status;
        this.requiredLevel = "none";
    }

    getCategory() {
        function getValue() {}
    }

    getEntityName(): string {
        return this.entityName;
    }

    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getStatus(): string {
        return this.status;
    }

    getSteps(): Array<Step> {
        return this.steps;
    }

    getAttribute() {
        return this.attribute;
    }

    isRequired(): string {
        return this.requiredLevel;
    }
}