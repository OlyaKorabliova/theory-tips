# Theory Tips

1. **[Patterns](./src/patterns)**
    - Creational
        -  [Builder](./src/patterns/Builder.ts) - [doc](https://refactoring.guru/design-patterns/builder)
        -  [Singleton](./src/patterns/Singleton.ts) - [doc](https://refactoring.guru/design-patterns/singleton)
    - Structural
        -  [Decorator](./src/patterns/Decorator.ts) - [doc](https://refactoring.guru/design-patterns/decorator)
    - Behavioral
        -  [Visitor](./src/patterns/Visitor.ts) - [doc](https://refactoring.guru/design-patterns/visitor)

1. **[RxJS](https://rxjs.dev/guide/overview)**
    - [Combination operators](./__tests__/rxjs/combination.spec.ts)
        - [concat()](https://rxjs.dev/api/index/function/concat)
        - [merge()](https://rxjs.dev/api/index/function/merge)
        - [combineLatest()](https://rxjs.dev/api/index/function/combineLatest)
        - [withLatestFrom()](https://rxjs.dev/api/operators/withLatestFrom)
        - [forkJoin()](https://rxjs.dev/api/index/function/forkJoin)
        - [startWith()](https://rxjs.dev/api/operators/startWith)
    - [Creation operators](./__tests__/rxjs/creation.spec.ts)
        - [of()](https://rxjs.dev/api/index/function/of)
        - [from()](https://rxjs.dev/api/index/function/from)
        - [empty()](https://rxjs.dev/api/index/const/EMPTY)
    - [Filtering operators](./__tests__/rxjs/filtering.spec.ts)
        - [filter()](https://rxjs.dev/api/operators/filter)
    - [Subjects](./__tests__/rxjs/subjects.spec.ts)
        - [Subject](https://rxjs.dev/guide/subject)
        - [BehaviorSubject](https://rxjs.dev/guide/subject#behaviorsubject)
        - [ReplaySubject](https://rxjs.dev/guide/subject#replaysubject)
        - [AsyncSubject](https://rxjs.dev/guide/subject#asyncsubject)
    - [Transformation](./__tests__/rxjs/transformation.spec.ts)
        - [map()](https://rxjs.dev/api/operators/map)
        - [scan()](https://rxjs.dev/api/operators/scan)
    - [Utility](./__tests__/rxjs/utility.spec.ts)
        - [tap()](https://rxjs.dev/api/operators/tap)


1. **[Object](./__tests__/object)**
    - [assign()](./__tests__/object/assign.spec.ts)
    - [entries()](./__tests__/object/entries.spec.ts)
    - [freeze()](./__tests__/object/freeze.spec.ts)
    - [getOwnPropertyDescriptor()](./__tests__/object/getOwnPropertyDescriptor.spec.ts)
    - [getOwnPropertyDescriptors()](./__tests__/object/getOwnPropertyDescriptors.spec.ts)
    - [getOwnPropertyNames()](./__tests__/object/getOwnPropertyNames.spec.ts)
    - [getOwnPropertySymbols()](./__tests__/object/getOwnPropertySymbols.spec.ts)
    - [getPrototypeOf()](./__tests__/object/getPrototypeOf.spec.ts)
    - [is()](./__tests__/object/is.spec.ts)
    - [isExtensible()](./__tests__/object/isExtensible.spec.ts)
    - [isFrozen()](./__tests__/object/isFrozen.spec.ts)
    - [isSealed()](./__tests__/object/isSealed.spec.ts)
    - [keys()](./__tests__/object/keys.spec.ts)
    - [preventExtensions()](./__tests__/object/preventExtensions.spec.ts)
    - [seal()](./__tests__/object/seal.spec.ts)
    - [setPrototypeOf()](./__tests__/object/setPrototypeOf.spec.ts)