import { range } from 'rxjs';

/*
	range(start, length) 

		创建observable对象 同步返回设置好范围的一组数值

		start 开始位置 
		length 长度
		
			从start开始, 返回length个数值

				1, 4 => 1, 2, 3, 4
				0, 4 => 0, 1, 2, 3

*/

range(0, 9)
	.subscribe(n => console.log(n));