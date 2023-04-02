import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function prohibitedWordsValidator(word: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const prohibited = word.test(control.value);
    return prohibited ? { prohibitedWords: { value: control.value } } : null;
  };
}
