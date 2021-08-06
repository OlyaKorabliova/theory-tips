import { AsyncSubject, Subject, BehaviorSubject, ReplaySubject  } from 'rxjs';

// ---- Subject() ----
test('Subject() simple subject', done => {
    const sub = new Subject();

    sub.next(1);
    const firstResult = [2, 3];
    sub.subscribe({
        next: val => {
            const element = firstResult.shift();
            if (element) expect(val).toEqual(element);
        },
        complete: done
    });
    sub.next(2);
    sub.subscribe({
        next: val => {
            expect(val).toEqual(3);
        },
        complete: done
    });
    sub.next(3);
    sub.complete();
});

// ---- BehaviorSubject() ----
test('BehaviorSubject() simple subject', done => {
    const sub = new BehaviorSubject(0);
    const firstResult = [0, 1, 2, 3, 4];

    sub.subscribe({
        next: val => {
            const element = firstResult.shift();
            if (element) expect(val).toEqual(element);
        },
        complete: done
    });

    sub.next(1);
    sub.next(2); // will store the value as current for the next subscribe
    const secondResult = [2, 3, 4];
    sub.subscribe({
        next: val => {
            const element = secondResult.shift();
            if (element) expect(val).toEqual(element);
        },
        complete: done
    });
    sub.next(3);
    sub.next(4);
    sub.complete();
});

// ---- ReplaySubject() ----
test('ReplaySubject() simple subject with 2 buffered values', done => {
    const sub = new ReplaySubject(2); // buffer 2 values for new subscribers
    const firstResult = [1, 2, 3, 4, 5];
 
    sub.subscribe({
        next: val => {
            const element = firstResult.shift();
            if (element) expect(val).toEqual(element);
        },
        complete: done
    });
    
    sub.next(1);
    sub.next(2);
    sub.next(3);
    sub.next(4);
    
    const secondResult = [3, 4, 5];
    sub.subscribe({
        next: val => {
            const element = secondResult.shift();
            if (element) expect(val).toEqual(element);
        },
        complete: done
    });
    
    sub.next(5);
    sub.complete();
});

// ---- AsyncSubject () ----
test('AsyncSubject () simple subject', done => {
    const sub = new AsyncSubject();
    const lastValue = 5;
    sub.subscribe({
        next: val => {
            expect(val).toEqual(lastValue);
        },
        complete: done
    });
    
    // next four values will be ignored in the output Ob-le
    sub.next(1);
    sub.next(2);
    sub.next(3);
    sub.next(4);

    sub.subscribe({
        next: val => {
            expect(val).toEqual(lastValue);
        },
        complete: done
    });
    sub.next(lastValue);
    sub.complete();
});