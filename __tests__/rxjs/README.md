# [Theory Tips](https://github.com/OlyaKorabliova/theory-tips)

## [RxJS](https://rxjs.dev/guide/overview)
- [Combination operators](./combination.spec.ts)
    - **[concat()](https://rxjs.dev/api/index/function/concat)**
        ```
        A:   --0-----1----|-->
        B:                 ---a----------b------|-->
        
        R:  --0-----1--------a----------b------|-->
        ```
    </br>

    - **[merge()](https://rxjs.dev/api/index/function/merge)**
        ```
        A: --0-----1---------2-----3----4---|-->
        B: ----a------b--c-------d----|-->
        
        R: --0-a---1--b--c---2--d--3----4---|-->
        ```
    </br>

    - **[combineLatest()](https://rxjs.dev/api/index/function/combineLatest)**
        ```
        A: --0-----1----2----|-->
        B: ----a------------b----|-->
        
        R: ----0a--1a---2a--2b---|-->
        ```
    </br>

    - **[withLatestFrom()](https://rxjs.dev/api/operators/withLatestFrom)**
        ```
        A: --0-----1-----------2-----3----4---|-->
        B: ----a------b--c--d----|-->
        
        R: --------1a----------2d----3d---4d--|-->
        ```
    </br>

    - **[forkJoin()](https://rxjs.dev/api/index/function/forkJoin)**
        ```
        A: --0---1--------2----3----4------|-->
        B: ----------a------b----c------------|-->
        C: ----z---x--y--w-------|-->

        R: ----------------------------------4cw|-->
        ```
    </br>

    - **[startWith()](https://rxjs.dev/api/operators/startWith)**
        ```
        A: -------1---------2-----3---|-->
        startWith(100)

        R: 100----1---------2-----3---|-->
        ```
    </br>

- [Creation operators](./creation.spec.ts)
    - **[of()](https://rxjs.dev/api/index/function/of)**
    - **[from()](https://rxjs.dev/api/index/function/from)**
    - **[empty()](https://rxjs.dev/api/index/const/EMPTY)**

</br>

- [Filtering operators](./filtering.spec.ts)
    - **[filter()](https://rxjs.dev/api/operators/filter)**
        ```
        A: --0----1----2----3----4---|-->
        filter(x => x% 2 === 1)

        R: -------1---------3--------|-->
        ```
    </br>


- [Subjects](./subjects.spec.ts)
    - **[Subject](https://rxjs.dev/guide/subject)**
    - **[BehaviorSubject](https://rxjs.dev/guide/subject#behaviorsubject)**
    - **[ReplaySubject](https://rxjs.dev/guide/subject#replaysubject)**
    - **[AsyncSubject](https://rxjs.dev/guide/subject#asyncsubject)**

</br>

- [Transformation](./transformation.spec.ts)
    - **[map()](https://rxjs.dev/api/operators/map)**
        ```
        A: -------1---------2-----3---|-->
        map(x => 10 * x)

        R: -------10--------20----30--|-->
        ```
    </br>

    - **[scan()](https://rxjs.dev/api/operators/scan)**
        ```
        A: -------1-------3-----5---|-->
        scan((acc, curr) => acc + curr, 0)

        R: -------1-------4-----9---|-->
        ```
    </br>

- [Utility](./utility.spec.ts)
    - **[tap()](https://rxjs.dev/api/operators/tap)**