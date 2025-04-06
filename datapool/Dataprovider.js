"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Dataprovider.ts
var Dataprovider = /** @class */ (function () {
    function Dataprovider(jsonData) {
        this.jsonData = jsonData;
    }
    Dataprovider.prototype.convertToModel = function (modelClass) {
        var modelInstance = new modelClass(this.jsonData.id, this.jsonData.name, this.jsonData.usuario, this.jsonData.password);
        return modelInstance;
    };
    return Dataprovider;
}());
exports.default = Dataprovider;
