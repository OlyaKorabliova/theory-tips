import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

// ---- tap() ----
test('tap() logging', done => {
  const source = of(1, 2, 3, 4, 5);
  const results = [11, 12, 13, 14, 15];

  // transparently log values from source with 'tap'
  const example = source.pipe(
      tap(val => console.log(`BEFORE MAP: ${val}`)),
      map(val => val + 10),
      tap(val => console.log(`AFTER MAP: ${val}`))
  );

  example.subscribe({
      next: val => {
        const element = results.shift();
        if (element) expect(val).toEqual(element);
      },
      complete: done
  })

});
