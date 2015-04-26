/// <reference path="M:\VISUALSTUDIOONLINE\BLOG\XRMUIMock\XRMUIMock\Attributes/Attribute.js" />
/*
 *@param requiredLevel:  none; required; recommended
 *@param disabled true/false
 * @param visible true/false
 */
function CreateSimpleControlWithAttribute(name, value, label) {
    return CreateControlWithAttribute(name, value, 'none', label, false, true);
};

function CreateControlWithAttribute(name, value, requiredLevel, label, disabled, visible) {
    var submitmode = 'dirty';
    if (disabled || (visible == false))
        submitmode = 'never';
    var attr = new Attribute(name, value, requiredLevel, submitmode);
    var ctrl = new Control(attr, name, label, disabled, visible);
    return ctrl;
};

    
Control = function (_attribute, _name, _label, _disabled, _visible) {
    this.name = _name;
    this.label = _label;
    this.visible = _visible !== 'undefined' ? _visible : true;
    this.disabled = _disabled !== 'undefined' ? _disabled : true;
    this.attribute = new Object();
    this.attribute = _attribute;
    
    this.getAttribute = function() {
        return this.attribute;
    };
    this.getName = function () {
        return this.name;
    };
    this.getLabel = function () {
        return this.label;
    };
    this.setLabel = function (newLabel) {
        this.label = newLabel;
    };
    this.getVisible = function () {
        return this.visible;
    };
    this.setVisible = function (newVisible) {
        this.visible = newVisible;
    };
    this.setDisabled = function (newDisable) {
        this.disabled = newDisable;
    };
    this.getDisabled = function () {
        return this.disabled;
    };
}