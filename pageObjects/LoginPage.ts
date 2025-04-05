import { $ } from '@wdio/globals'; // Importe o $ diretamente dos globals

class LoginPage {

    get getCampoEmail() { 
      return $("~input-email");
    }

    get getCampoPassword() { 
      return $("~input-password");
    }

    get getButtonLogin() { 
      return $('//*[contains(@text, "LOGIN")]');;
    }

}
  
export default LoginPage;