---
title: typescript utility types
date: "2021-05-27 23:01:59"
---

```ts
type RequiredKeys<T> = Exclude<
  {
    [K in keyof T]: Extract<T[K], undefined> extends never ? K : never;
  }[keyof T],
  undefined
>;

type OptionalKeys<T> = Exclude<
  {
    [K in keyof T]: Extract<T[K], undefined> extends never ? never : K;
  }[keyof T],
  undefined
>;

type PickRequired<T> = Pick<T, RequiredKeys<T>>;

type PickOptional<T> = Pick<T, OptionalKeys<T>>;

type Nullable<T> = { [P in keyof T]: T[P] | null };

type NullableOptional<T> = PickRequired<T> & Nullable<PickOptional<T>>;

type DeepNullable<T> = { [K in keyof T]: DeepNullable<T[K]> | null };

type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];
```

```ts
type CamelCase<S> = S extends `ID`
  ? `id`
  : S extends string
  ? Uncapitalize<S>
  : S;

type CamelCased<T> = T extends any[]
  ? { [K in keyof T]: CamelCased<T[K]> }
  : T extends Record<string, any>
  ? { [K in keyof T as CamelCase<K>]: CamelCased<T[K]> }
  : T;
```
