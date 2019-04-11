import { interval } from 'rxjs';
import { filter } from 'rxjs/operators';

/*
	filter(v => boolean)

		对值进行过滤 返回布尔值 true 将值继续向下传递 false 值不满足条件 终止向下传递

*/

interval(1000)
	.pipe(
		filter(n => n % 2 == 0)
	)
	.subscribe(n => console.log(n));