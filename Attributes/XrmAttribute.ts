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

    getName() {
        return this.name;
    }

    getValue() {
        return this.value;
    }

    setValue(newValue) {
        this.value = newValue;
    }

    getIsDirty() {
        return (this.value !== this.initValue);
    }

    setSubmitMode(newSubmitMode) {
        this.submitMode = newSubmitMode;
    }

    getSubmitMode() {
        return this.submitMode;
    }

    setRequiredLevel(newRequiredLevel) {
        this.requiredLevel = newRequiredLevel;
    }

    getRequiredLevel () {
        return this.requiredLevel;
    }

    getNameFromFunction(f: Function): string {
        const fstr: string = f.toString();
        const tmpFcName: RegExpExecArray = /^function\s+([\w\$]+)\s*\(/.exec(fstr);

        if (tmpFcName != null && tmpFcName.length > 1) {
            return tmpFcName[1];
        } else {
            return null;
        }
    }

    addOnChange(f: Function): void {
        let fObj = new Object(null);
        fObj = {
            "fc": f,
            "name": this.getNameFromFunction(f)
        };
        this.onChangeFunctions.push(fObj);
    }

    fireOnChange() {
        if (this.onChangeFunctions == null) {
            return;
        }

        for (let fun of this.onChangeFunctions) {
            fun.fc(this);
        }
    }

    getEventSource() {
        return this;
    }
}