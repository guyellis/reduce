# reduce

TypeScript/JavaScript reduce()

In the context of updating the accumulator in a JS `reduce()` method we might want to take an immutable approach if the data lends itself to that. If we are reducing to a single number or other immutable type then this is not a question. When the target (accumulator) is mutable (an object) then you could update (mutate) the object or create a new object.

## Mutating

```ts
anArray.reduce((acc, item) => {
  acc[item.key] = item;
  return acc;
}, {});
```

## Non Mutating

```ts
anArray.reduce((acc, item) => {
  return {
    ...acc,
    [item.key]: item,
  };
}, {});
```

## Test Runner

Do the usual `npm i` and then:

```shell
ts-node lib/reduce-runner.ts
```
