import { Attribute } from "./../Attributes/Attribute";
import { RequiredLevel } from "./../Types/RequiredLevel";

export class Step{
    attribute: Attribute;
    name: string
    requiredLevel: RequiredLevel;

    constructor(attribute: Attribute, name: string, requiredLevel: RequiredLevel){
        this.attribute = attribute;
        this.name = name;
        this.requiredLevel = requiredLevel;
    }

    getAttribute(){
        return this.attribute;
    }

    getName(){
        return this.name;
    }

    isRequired(){
        return this.requiredLevel;
    }
}