import { AbstractControl } from '@angular/forms';
export class AppFormValidators {
	static MatchPassword(AC: AbstractControl) {
		let password = AC.get('firstPassword').value; // to get value in input tag
		let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
		if (password != confirmPassword) {
			// console.log('false');
			return { MatchPassword: true };
		} else {
			// console.log('true');
			return null;
		}
	}
}
