import { from, Subject, of } from 'rxjs';
import { map, scan } from 'rxjs/operators';

// ---- map() ----
test('map() Add 10 to each number', done => {
    const source = from([1, 2, 3, 4, 5]);
    const example = source.pipe(map(val => val + 10));
    const results = [11, 12, 13, 14, 15];
    example.subscribe({
        next: val => {
            const element = results.shift();
            if (element) expect(val).toEqual(element);
        },
        complete: done
    })
});

test('map() to single property', done => {
    const source = from([
        { name: 'Joe', age: 30 },
        { name: 'Frank', age: 20 },
        { name: 'Ryan', age: 50 }
    ]);
    const example = source.pipe(map(({ name }) => name));
    const results = ['Joe', 'Frank', 'Ryan'];
    example.subscribe({
        next: val => {
            const element = results.shift();
            if (element) expect(val).toEqual(element);
        },
        complete: done
    })
});

// ---- scan() ----
test('scan() Sum over time', done => {
    const source = of(1, 2, 3);
    const example = source.pipe(scan((acc, curr) => acc + curr, 0));
    const results = [1, 3, 6];
    example.subscribe({
        next: val => {
            const element = results.shift();
            if (element) expect(val).toEqual(element);
        },
        complete: done
    })
});

test('scan() Accumulating an object', done => {
    const subject = new Subject();
    const example = subject.pipe(
        scan((acc, curr) => Object.assign({}, acc, curr), {})
    );
    const results = [
        { name: 'Joe' },
        { name: 'Joe', age: 30 },
        { name: 'Joe', age: 30, favoriteLanguage: 'JavaScript' }
    ];

    example.subscribe({
        next: val => {
            const element = results.shift();
            if (element) expect(val).toEqual(element);
        },
        complete: done
    });
    subject.next({ name: 'Joe' });
    subject.next({ age: 30 });
    subject.next({ favoriteLanguage: 'JavaScript' });
    subject.complete()
});