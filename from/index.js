import { from } from 'rxjs';

/*
	from() 
			
		参数: 数组 promise

		将参数转换为Observable
	
*/

// const ary = [1, 2, 3 ,4, 2, 3];
// from(ary).subscribe(n => console.log(n));

const p = new Promise(resolve => resolve(["a", "b"]));
from(p).subscribe(r => console.log(r))
