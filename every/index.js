import { range } from 'rxjs';
import { every } from 'rxjs/operators';

/*
	every 判断Observable发出的每一个值是否满足条件 
			如果有一个值不满足条件 Observable终止 返回false
			如果全部满足条件 则再向下执行


*/

range(2, 9)
	.pipe(
		every(n => n % 2 == 0)
	)
	.subscribe(r => console.log(r))