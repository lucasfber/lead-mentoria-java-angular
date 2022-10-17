import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const VALID_DATE_REGEX =
  /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

export class CustomValidators {
  public static isValidDate(formControlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const dateControl = control.root.get(formControlName);

      // split na string da data para inserir o caractere /
      const digits = control.value?.split('');
      const day = `${digits[0]}${digits[1]}`;
      const month = `${digits[2]}${digits[3]}`;
      const year = `${digits[4]}${digits[5]}${digits[6]}${digits[7]}`;
      console.log('CONTORL VALU', `${day}/${month}/${year}`);
      console.log('VALU', VALID_DATE_REGEX.test(`${day}/${month}/${year}`));
      return VALID_DATE_REGEX.test(`${day}/${month}/${year}`) === true
        ? null
        : { isValidDate: { field: formControlName } };
    };
  }
}
