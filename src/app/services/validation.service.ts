import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'Este campo es requerido',
            'invalidEmailAddress': 'Correo invalido',
            'invalidPassword': 'Contraseña invalida. Su contraseña debe tener al menos 6 digitos y un numero',
            'minlength': 'Debe tener al menos '+validatorValue.requiredLength+' caracteres'
        };
        return config[validatorName];
    }

    static emailValidator(control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }

    static passwordValidator(control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }
}
