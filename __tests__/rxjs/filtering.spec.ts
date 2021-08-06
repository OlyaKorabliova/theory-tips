import { from, interval } from 'rxjs';
import { filter } from 'rxjs/operators';

// ---- filter() ----
test('filter() for even numbers', done => {
    const source = from([1, 2, 3, 4, 5]);
    const example = source.pipe(filter(num => num % 2 === 0));
    const results = [2, 4];
    example.subscribe({
        next: val => {
            const element = results.shift();
            if (element) expect(val).toEqual(element);
        },
        complete: done
    })
});

test('filter() objects based on property', done => {
    const source = from([
        { name: 'Joe', age: 31 },
        { name: 'Bob', age: 25 }
    ]);
    const example = source.pipe(filter(person => person.age >= 30));
    example.subscribe(val => {
        expect(val).toEqual({ name: 'Joe', age: 31 });
        done();
    })
});

test('filter() for number greater than specified value', done => {
    const source = interval(100);
    const example = source.pipe(filter(num => num > 5));
    const results = [6, 7, 8];
    let circleCount = 0;
    example.subscribe(val => {
        if (circleCount === results.length) done();
        expect(val).toEqual(results[circleCount]);
        circleCount += 1;
    })
});
