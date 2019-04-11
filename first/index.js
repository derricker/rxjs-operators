import { interval } from 'rxjs';
import { first } from 'rxjs/operators';

/*
	first(n => boolean) 只发出符合条件的第一个值 

		true 当前值符合要求 向下传值 终止Observable
		
		false 当前值不符合要求 不向下传值 继续等待下一个值
*/

interval(1000)
	.pipe(
		first(n => n == 5)
	)
	.subscribe(console.log)