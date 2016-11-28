import { Attribute } from "./../Attributes/Attribute";

export function CreateSimpleControlWithAttribute(name: string, value: any, label: string): Control {
    return CreateControlWithAttribute(name, value, "none", label, false, true);
};

export function CreateControlWithAttribute(name: string, value: any, requiredLevel: string, label: string, disabled: boolean, visible: boolean): Control {
    let submitmode = "dirty";
    if (disabled || (visible === false)) {
        submitmode = "never";
    }
    const attr: Attribute = new Attribute(name, value, requiredLevel, submitmode);
    const ctrl: Control = new Control(attr, name, label, disabled, visible);

    return ctrl;
};

export class Control {
    name: string;
    label: string;
    visible: boolean;
    disabled: boolean;
    attribute: any;

    constructor(attribute, name, label, disabled?, visible?) {
        this.name = name;
        this.label = label;
        this.visible = visible || true;
        this.disabled = disabled || false;
        this.attribute = attribute;
    }

    getAttribute(): Attribute {
        return this.attribute;
    }

    getName(): string {
        return this.name;
    }

    getLabel(): string {
        return this.label;
    }

    setLabel(newLabel: string):void {
        this.label = newLabel;
    }

    getVisible(): boolean {
        return this.visible;
    }

    setVisible(newVisible: boolean): void {
        this.visible = newVisible;
    }

    getDisabled(): boolean {
        return this.disabled;
    }

    setDisabled(newDisabled: boolean): void {
        this.disabled = newDisabled;
    }
}