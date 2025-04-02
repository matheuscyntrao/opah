
import { ApiResponse } from "./ApiResponse";

export class Validations {
    static validateResponse(received: ApiResponse, expected: ApiResponse): boolean {
      if (received.statusCode !== expected.statusCode) {
        throw new Error(
          `Status code esperado: ${expected.statusCode} \n Status code recebido: ${received.statusCode}`
        );
      }
      
      if (JSON.stringify(received.body) !== JSON.stringify(expected.body)) {
        throw new Error(
          `Body esperado: ${JSON.stringify(expected.body)}\n Body recebido: ${JSON.stringify(received.body)}`
        );
      }
      return true;
    }
  }


  