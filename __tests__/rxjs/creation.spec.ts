import { of, from, empty } from 'rxjs';

// ---- of() ----
test('of() string', done => {
  of('hello').subscribe(data => {
    expect(data).toEqual('hello');
    done();
  });
});

test('of() Emitting a sequence of numbers', done => {
  let number = 1;
  of(1, 2, 3, 4, 5).subscribe({
    next: val => {
        expect(val).toBe(number)
        number += 1
      },
    complete: done,
  });
});

test('of() Emitting an object, array, and function', done => {
  const test = [
    { name: 'Brian' },
    [1, 2, 3],
    () => 'Hello'
  ];
  const source = of(test[0], test[1], test[2]);

  source.subscribe({
    next: val => {
      const element = test.shift();
        if (element) expect(val).toBe(element)
      },
    complete: done,
  });
});

// // ---- from() ----
test('from() Observable from array', done => {
  let last = 2;
  from([2, 4, 6, 8, 10])
  .subscribe({
      next: val => {
          expect(val).toBe(last)
          last += 2
        },
      complete: done,
  })
});

test('from() Observable from promise', done => {
  from(new Promise(resolve => resolve('Hello World!')))
  .subscribe(val => {
    expect(val).toEqual('Hello World!');
    done();
  })
});

test('from() Observable from collection', done => {
  const arr = [[1, 'Hi'], [2, 'Bye']];

  const collection = new Map();
  collection.set(arr[0][0], arr[0][1]);
  collection.set(arr[1][0], arr[1][1]);

  from(collection)
    .subscribe({
      next: val => {
        const element = arr.shift();
        if (element) expect(val).toEqual(element);
      },
      complete: done,
  })
});

test('from() Observable from string', done => {
  let index = 0;
  const str = 'Hello World';

  from(str)
    .subscribe({
      next: val => {
          expect(val).toEqual(str[index]);
          index += 1;
        },
      complete: done
  })
});

// ---- empty() ----
test('empty() immediately completes', done => {
  let sum = 0;
  const arr = [1, 2, 3, 4];

  empty()
    .subscribe({
      next: () => {
        const element = arr.shift();
        if (element) sum += element;
      },
      complete: () => {
          expect(sum).toEqual(0); // sum should not change during next();
          done();
      }
  })
});
