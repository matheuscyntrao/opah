// Dataprovider.ts
class Dataprovider {
    jsonData;
    constructor(jsonData) {
        this.jsonData = jsonData;
    }
    convertToModel(modelClass) {
        const modelInstance = new modelClass(this.jsonData.id, this.jsonData.name, this.jsonData.usuario, this.jsonData.password);
        return modelInstance;
    }
}
export default Dataprovider;
