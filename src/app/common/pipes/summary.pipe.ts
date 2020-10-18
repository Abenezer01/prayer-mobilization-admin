import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'summary'
})
export class SummaryPipe implements PipeTransform {
	transform(value: string, limit?: number) {
		if (!value) return null;

		let actualLimit = limit ? limit : 500;
		return value.substr(0, actualLimit) + '...';
	}
}
