import { range, interval } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';

/*
	map(v => v) 对值进行转换 接收函数作为参数 接收旧值 返回新值
	mapTo() 转换为新值 不接收旧值 接收新值作为参数
*/

range(1, 9)
	.pipe(
		map(n => n * n)
	)
	.subscribe(n => console.log(n));

interval(1000)
	.pipe(
		mapTo('another value')
	)
	.subscribe(n => console.log(n))
