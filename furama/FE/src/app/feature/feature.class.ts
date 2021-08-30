import {AbstractControl, ValidationErrors} from '@angular/forms';

export class Feature {
  public static convertStringToDate(){

  }

  static checkAge(control: AbstractControl): ValidationErrors| null{
    let value=Date.parse(control.value);
    const ageDifMs = Date.now() - value.valueOf();
    const ageDate = new Date(ageDifMs);
    if (Math.abs(ageDate.getUTCFullYear() - 1970)>=18){
      return null;
    }else {
      return {NotEnoughAge: true}
    }
  }
}
