import { interval } from 'rxjs';
import { tap, map } from 'rxjs/operators';

/*
	tap() 不想改变原有Oberable 但是想做一些事情 接收上一个Observabel 返回上一个Observabel
*/

interval(4000)
	.pipe(
		map(n => n * n),
		tap(console.log),
		map(n => n * n * n),
		tap(console.log),
		map(n => n / 2),
		tap(console.log)
	)
	.subscribe(console.log)