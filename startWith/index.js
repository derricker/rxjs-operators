import { timer } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

/*
	startWith(值) 立即发射提供的值 对于异步编程有用 尤其是需要耗费一定时间才能有值发射
*/

timer(4000, 1000)
	.pipe(
		map(n => n + 1),
		startWith(0)
	)
	.subscribe(console.log)