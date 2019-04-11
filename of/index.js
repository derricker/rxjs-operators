import { of } from 'rxjs';

/*
	of(arg1, arg2, ...)
		将参数转换为Observable
*/

of(1, 2, 3, 4, 5).subscribe(n => console.log(n));
of(...['a', 'b', 'c']).subscribe(c => console.log(c));