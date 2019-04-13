import { fromEvent } from 'rxjs';
import { defaultIfEmpty, takeUntil } from 'rxjs/operators';

fromEvent(document, 'click')
	.pipe(
		takeUntil(interval(5000)),
		defaultIfEmpty('no clicks')
	)
	.subscribe(x => console.log(x))