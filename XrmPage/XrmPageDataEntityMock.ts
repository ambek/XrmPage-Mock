export class XrmPageDataEntityMock {
    id: string;
    attributes: any;

    constructor(id: string, attributes: any) {
        this.id = id;
        this.attributes = function () {
            this.collection = attributes;

            this.get = attributeName => {
                for (let idx of this.collection) {
                    if (this.collection[idx].getName() === attributeName) {
                        return this.collection[idx];
                    }
                };
                return null;
            };

            this.forEach = (): never => {
                throw Error("forEach is not ready");
            };
        };
    }
}