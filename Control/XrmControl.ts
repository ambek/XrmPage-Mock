import { XrmAttribute } from "../Attributes/XrmAttribute";

export function CreateSimpleControlWithAttribute(name: string, value: any, label: string): XrmControl {
    return CreateControlWithAttribute(name, value, "none", label, false, true);
};

export function CreateControlWithAttribute(name: string, value: any, requiredLevel: string, label: string, disabled: boolean, visible: boolean): XrmControl {
    let submitmode = "dirty";
    if (disabled || (visible === false)) {
        submitmode = "never";
    }
    const attr: XrmAttribute = new XrmAttribute(name, value, requiredLevel, submitmode);
    const ctrl: XrmControl = new XrmControl(attr, name, label, disabled, visible);

    return ctrl;
};

export class XrmControl {
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

    getAttribute(): XrmAttribute {
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