import { interval, timer } from 'rxjs';

/*
	interval(duration) 间隔duration发出一个数值(重复) 返回Observable
	
	timer(duration) 间隔duration发出一个数值(单次) 返回Observable

	timer(duration, interval) 延迟duration发出一个数值, 转而间隔interval继续发出数值(单次转重复)
	
*/

// interval(1000).subscribe(n => console.log(n))

// timer(2000, 1000).subscribe(n => console.log(n))