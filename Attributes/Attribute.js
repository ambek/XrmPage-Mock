Attribute = function (_name, _value, _requiredLevel, _submitMode) {
    //    always, never, dirty
    //   none, required, recommended
    if (typeof _requiredLevel !== 'undefined')
        this.requiredLevel = _submitMode;

    this.submitMode = "always";
    if (typeof _submitMode !== 'undefined')
        this.submitMode = _submitMode;

    this.onChangeFunctions = [];

    this.getName = function () {
        return this.name;
    };
    this.getValue = function () {
        return this.value;
    };
    this.setValue = function (newValue) {
        this.value = newValue;
    };
    this.getIsDirty = function () {
        return (this.value != this.initValue);
    };
    /*
     *@param: always, never, dirty
     */
    this.setSubmitMode = function (newSubmitMode) {
        this.submitMode = newSubmitMode;
    };
    this.getSubmitMode = function () {
        return this.submitMode;
    };
    /*
     * @parm none, required, recommended
     */
    this.setRequiredLevel = function (newRequiredLevel) {
        this.requiredLevel = newRequiredLevel;
    };

    this.getRequiredLevel = function () {
        return this.requiredLevel;
    };
    function getNameFromFunction(f) {
        var f = f.toString();
        var tmpFcName = /^function\s+([\w\$]+)\s*\(/.exec(f);
        if (tmpFcName != null && tmpFcName.length > 1)
            return tmpFcName[1];
        else
            return null;
    };

    this.addOnChange = function (f) {
        var fObj = new Object();
        fObj = {
            fc: f,
            name: getNameFromFunction(f)
        };
        this.prot
        this.onChangeFunctions.push(fObj);
    }
    this.fireOnChange = function () {
        if (this.onChangeFunctions == null)
            return;
        for (i in this.onChangeFunctions) {
            this.onChangeFunctions[i].fc(this);
        }
    }
    this.getEventSource = function () {
        return this;
    }
    this.value = _value;
    this.initValue = _value;
    this.name = _name;
    this.requiredLevel = "none";

};

