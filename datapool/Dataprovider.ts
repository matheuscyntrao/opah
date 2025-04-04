// Dataprovider.ts
class Dataprovider {
  private jsonData: any;

  constructor(jsonData: any) {
      this.jsonData = jsonData;
  }

  convertToModel<T>(modelClass: new (...args: any[]) => T): T {
      const modelInstance = new modelClass(
          this.jsonData.id,
          this.jsonData.name,
          this.jsonData.usuario,
          this.jsonData.password
      );

      return modelInstance;
  }
}

export default Dataprovider;