export class XrmPageUiMock {
    controls: any;
    formType: number;



    constructor(controls, formType) {
        this.controls = function () {
            this.collection = controls;
            this.get = controlName => {
                for (let idx of this.collection) {
                    if (this.collection[idx].getName() === controlName) {
                        return this.collection[idx];
                    }
                };
                return null;
            };
            this.forEach = function () {
                throw Error("forEach is not ready");
            };
        };

        this.formType = formType;
    }

    getFormType () {
        return this.formType;
    }
}