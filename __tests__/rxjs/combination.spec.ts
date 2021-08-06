import { of, merge, concat, combineLatest, Subject, forkJoin, BehaviorSubject } from 'rxjs';
import { withLatestFrom, startWith } from 'rxjs/operators';

// ---- concat() ----
test('concat() 2 streams', done => {
    // A:   --0-----1----|-->
    // B:                 ---a----------b------|-->

    // AB:  --0-----1--------a----------b------|-->

    const resultAB = [0, 1, 'a', 'b'];
    const A = new Subject();
    const B = new Subject();
    concat(A, B).subscribe({
        next: val => {
            const element = resultAB.shift();
            if (element) {
                expect(val).toEqual(element);
            }
        },
        complete: done
    })
    A.next(0);
    A.next(1);
    A.complete();
    B.next('a');
    B.next('b');
    B.complete();
});

test('concat() 3 streams', done => {
    // A:   --0-----1----|-->
    // B:                 ---a----------b------|-->
    // C:      --11------------22----|-->

    //ACB:  --0-----1----------22-------b------|-->
    
    const resultACB = [0, 1, 22, 'b'];
    const A = new Subject();
    const C = new Subject();
    const B = new Subject();
    concat(A, C, B).subscribe({
        next: val => {
            const element = resultACB.shift();
            if (element) {
                expect(val).toEqual(element);
            }
        },
        complete: done
    })
    A.next(0);
    C.next(11);
    A.next(1);
    A.complete();
    B.next('a');
    C.next(22);
    C.complete();
    B.next('b');
    B.complete();
});

test('concat() one stream errors', done => {
    // A:   --0-----1----|-->
    // C:      --11------------22----|-->
    // E:                 -AA-----X    

    //AEC:  --0-----1------AA--22-X

    const resultAEC = [0, 1, 'AA', 22];
    const A = new Subject();
    const C = new Subject();
    const E = new Subject();
    concat(A, E, C).subscribe({
        next: val => {
            const element = resultAEC.shift();
            if (element) {
                expect(val).toEqual(element);
            }
        },
        error: err => {
          expect(err).toEqual('error happened');
          done();
        }
    })
    A.next(0);
    C.next(11);
    A.next(1);
    E.next('AA');
    A.complete();
    C.next(22);
    E.error('error happened');
    C.complete();
});


// ---- merge() ----
test('merge() 2 streams', done => {
    // A: --0-----1---------2-----3----4---|-->
    // B: ----a------b--c-------d----|-->

    //AB: --0-a---1--b--c----2--d--3----4---|-->

    const resultAB = [0, 'a', 1, 'b', 'c', 2, 'd', 3, 4];
    const A = new BehaviorSubject(0);
    const B = new Subject();
    merge(A, B).subscribe({
        next: val => {
            const element = resultAB.shift();
            if (element) {
                expect(val).toEqual(element);
            }
        },
        complete: done
    });

    B.next('a');
    A.next(1);
    B.next('b');
    B.next('c');
    A.next(2);
    B.next('d');
    A.next(3);
    A.next(4);
    A.complete();
    B.complete();
})

test('merge() one stream errors', done => {
    // A: --0-----1---------2-----3----4---|-->
    // E: -----------100----X

    //AE: --0-----1--100----X

    const A = new BehaviorSubject(0);
    const E = new Subject();
    const resultAE = [0, 1, 100];
    
    merge(A, E).subscribe({
      next: val => {
        const element = resultAE.shift();
        if (element) {
            expect(val).toEqual(element);
        }
      },
      error: err => {
        expect(err).toEqual('error happened');
        done();
      }
    })
    A.next(1);
    E.next(100);
    E.error('error happened');
    A.next(2);
    A.next(3);
    A.next(4);
    A.complete();
})


// ---- combineLatest() ----
test('combineLatest() 2 streams', done => {
  // A: --0-----1----2----|-->
  // B: ----a------------b----|-->

  //AB: ----0a--1a---2a--2b---|-->
  const resultAB = [
    [0, 'a'],
    [1, 'a'],
    [2, 'a'],
    [2, 'b']
  ];
  const A = new BehaviorSubject(0);
  const B = new Subject();
  combineLatest([A, B])
  .subscribe({
    next: val => {
      const element = resultAB.shift();
      if (element) {
        expect(val[0]).toEqual(element[0]);
        expect(val[1]).toEqual(element[1]);
      }
    },
    complete: done
  });

  B.next("a");
  A.next(1);
  A.next(2);
  B.next("b")
  A.complete();
  B.complete();
});

test('combineLatest() one stream errors', done => {
  // B: ----a------------b----|-->
  // E: ------10---X

  //BE: ------a10--X
  const resultBE = ['a', 10];
  const B = new Subject();
  const E = new Subject();
  combineLatest([B, E])
  .subscribe({
    next: val => {
      expect(val).toEqual(resultBE);
    },
    error: err => {
      expect(err).toEqual('error happened');
      done();
    }
  });

  B.next("a");
  E.next(10);
  E.error('error happened')
  B.next("b")
  B.complete();
});

// ---- withLatestFrom() ----
test('withLatestFrom() 2 streams', done => {
  // A: --0-----1-----------2-----3----4---|-->
  // B: ----a------b--c--d----|-->

  //AB: --------1a----------2d----3d---4d--|-->

  const resultAB = [
    [1, 'a'],
    [2, 'd'],
    [3, 'd'],
    [4, 'd']
  ];
  const A = new BehaviorSubject(0);
  const B = new Subject();
  const AB = A.pipe(withLatestFrom(B))
  AB.subscribe({
    next: val => {
      const element = resultAB.shift();
      if (element) {
        expect(val[0]).toEqual(element[0]);
        expect(val[1]).toEqual(element[1]);
      }
    },
    complete: done
  });
  B.next("a");
  A.next(1);
  B.next("b");
  B.next("c");
  B.next("d");
  A.next(2);
  A.next(3);
  A.next(4);
  A.complete();
  B.complete();
});

test('withLatestFrom() one stream errors', done => {
  // A: --0-----1-----------2-----3----4---|-->
  // E:-------A-----------X

  //AE: ------1A----------X

  const A = new BehaviorSubject(0);
  const E = new Subject();
  const resultAE = [1, 'A'];
  const AE = A.pipe(withLatestFrom(E))
  AE.subscribe({
    next: val => {
      expect(val).toEqual(resultAE);
    },
    error: err => {
      expect(err).toEqual('error happened');
      done();
    }
  });

  E.next("A");
  A.next(1);
  E.error('error happened');
  A.next(2);
  A.next(3);
  A.next(4);
  A.complete();
});

// ---- forkJoin() ----
test('forkJoin() 3 streams', done => {
  // A: --0---1--------2----3----4------|-->
  // B: ----------a------b----c------------|-->
  // C: ----z---x--y--w-------|-->

  // R: ----------------------------------4cw|-->
  const result = [4, 'c', 'w'];
  const A = new BehaviorSubject(0);
  const B = new Subject();
  const C = new Subject();
  forkJoin([A, B, C])
  .subscribe({
    next: val => {
      expect(val).toEqual(result);
    },
    complete: done
  });

  C.next("z");
  A.next(1);
  C.next("x");
  B.next("a");
  C.next("y");
  C.next("w");
  A.next(2);
  B.next("b")
  A.next(3);
  B.next("c");
  A.next(4);
  A.complete();
  B.complete();
  C.complete();
});

// ---- startWith() ----
test('startWith() on number sequence', done => {
    // A: -------1---------2-----3---|-->
    // startWith(100)

    // R: 100----1---------2-----3---|-->
    const source = of(1, 2, 3);
    const example = source.pipe(startWith(100));
    const result = [100, 1, 2, 3];
    example.subscribe({
        next: val => {
            const element = result.shift();
            if (element) expect(val).toEqual(element);
        },
        complete: done
    })
});

test('startWith() chain of emissions', done => {
    // A: ------------1---------2-----3---|-->
    // startWith('a', 'b', 'c')

    // R: a--b--c-----1---------2-----3---|-->
    const source = of(1, 2, 3);
    const example = source.pipe(startWith('a', 'b', 'c'));
    const result = ['a', 'b', 'c', 1, 2, 3];
    example.subscribe({
        next: val => {
            const element = result.shift();
            expect(val).toEqual(element);
        },
        complete: done
    })
});