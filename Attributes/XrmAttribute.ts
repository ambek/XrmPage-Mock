export class XrmAttribute {
    private submitMode: string;
    private requiredLevel: string;
    private value: any;
    private initValue: any;
    private name: string;
    private onChangeFunctions: Array<any>;

    constructor(name, value, requiredLevel, submitMode) {
        this.submitMode = submitMode || "dirty";
        this.requiredLevel = requiredLevel || "none";
        this.name = name;
        this.value = value;
        this.initValue = value;
        this.onChangeFunctions = [];
    }

    public getName() {
        return this.name;
    }

    public getValue() {
        return this.value;
    }

    public setValue(newValue) {
        this.value = newValue;
    }

    public getIsDirty() {
        return (this.value !== this.initValue);
    }

    public setSubmitMode(newSubmitMode) {
        this.submitMode = newSubmitMode;
    }

    public getSubmitMode() {
        return this.submitMode;
    }

    public setRequiredLevel(newRequiredLevel) {
        this.requiredLevel = newRequiredLevel;
    }

    public getRequiredLevel () {
        return this.requiredLevel;
    }

    public getNameFromFunction(f: Function): string {
        const fstr: string = f.toString();
        const tmpFcName: RegExpExecArray = /^function\s+([\w\$]+)\s*\(/.exec(fstr);

        if (tmpFcName != null && tmpFcName.length > 1) {
            return tmpFcName[1];
        } else {
            return null;
        }
    }

    public addOnChange(f: Function): void {
        let fObj = new Object(null);
        fObj = {
            "fc": f,
            "name": this.getNameFromFunction(f)
        };
        this.onChangeFunctions.push(fObj);
    }

    public fireOnChange() {
        if (this.onChangeFunctions == null) {
            return;
        }

        for (let fun of this.onChangeFunctions) {
            fun.fc(this);
        }
    }

    public getEventSource() {
        return this;
    }
}