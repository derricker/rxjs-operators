import { interval } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

/*
	distinctUntilChanged() 如果Obervable发出的值和上一次发出的值相同, 终止这次Observable发出的值
	
*/

interval(100)
	.pipe(
		map(n => Math.ceil((n + 1) / 10)),
		distinctUntilChanged()
	)
	.subscribe(r => console.log(r))