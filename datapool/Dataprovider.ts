
class Dataprovider {

    private jsonData: any;
    private modelInstance: Object;
  
    constructor(jsonData: any) {
      this.jsonData = jsonData;
    }
  
    convertToModel<T>(modelClass: new (...args: any[]) => T): T {
      const modelInstance = new modelClass();
  
      for (const key in this.jsonData) {
        if (this.jsonData.hasOwnProperty(key) && key in this.modelInstance) {
          (modelInstance as any)[key] = this.jsonData[key];
        }
      }
  
      return modelInstance;
    }

  }
