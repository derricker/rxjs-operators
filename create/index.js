import { Observable } from 'rxjs';

const ob = Observable.create(observer => {
	observer.next('123');
	setTimeout(() => {
		// observer.complete();
		observer.error('发生了错误')
	}, 1000);
});

ob.subscribe({
	next: r => console.log(r),
	complete: () => console.log('completed'),
	error: e => console.log(e)
});

