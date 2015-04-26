XrmMock = function (_page) {
    this.Page = _page;
};

/*
 *@param formType 0 Undefined; 1 Create; 2 Update; 3 Read Only; 4 Disabled; 6 Bulk Edit
 */
XrmPageMock = function (id, controls, formType) {
    this.ui = new XRMPageUiMock(controls, formType);
    var attributes = new Array();
    for (var idx in controls) {
        attributes.push(controls[idx].getAttribute());
    };
    this.data = new XrmPageDataMock(id, attributes);

    this.getAttribute = function (attributeName) {
        return this.data.entity.attributes.get(attributeName);
    };
    this.getControl = function (controlName) {
        return this.ui.controls.get(controlName);
    };
};

XRMPageUiMock = function(controls, formType) {
    this.controls = {
        collection: controls,
        get: function (controlName) {
            for (var idx in this.collection) {
                if (this.collection[idx].getName() == controlName)
                    return this.collection[idx];
            };
            return null;
        },       
        forEach: function() {
            throw Error("forEach is not ready")
        },
    };
        
        ;
    this.formType = formType;
    this.getFormType = function(){
        return this.formType;
    }
}

XrmPageDataMock = function (id, attributes) {
    this.refresh = function () {
        throw Error("Refresh is not ready")
    };
    this.save = function () {
        throw Error("Save is not ready")
    };
    this.entity = new XrmPageDataEntityMock(id, attributes);
}


XrmPageDataEntityMock = function (id, attributes) {
    this.id = id;
    this.attributes = {
        collection: attributes,
        get: function (attributeName) {
            for (var idx in this.collection) {
                if (this.collection[idx].getName() == attributeName)
                    return this.collection[idx];
            };
            return null;
        },       
        forEach: function() {
            throw Error("forEach is not ready")
        },
    };
}

