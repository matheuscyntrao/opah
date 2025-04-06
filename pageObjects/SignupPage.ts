import { $ } from '@wdio/globals';

class SignupPage {

    get getCampoEmail() { 
      return $("~input-email");
    }

    get getCampoPassword() { 
      return $("~input-password");
    }

    get getCampoConfirmPassword() {
      return $('~input-repeat-password');
    }

    get getSignupButton() { 
      return $('//*[contains(@text, "SIGN UP")]');;
    }

}
  
export default SignupPage;