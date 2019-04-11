import { interval } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

/*
	pluck('对象属性名称') 从对象中摘取属性值

*/

interval(1000)
	.pipe(
		map(i => ({name: `friend${i}`, age: i * 2})),
		pluck('name')
	)
	.subscribe(console.log);