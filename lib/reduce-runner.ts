import {
  reduceImmutableMap,
  reduceImmutableObject,
  reduceMutableMap,
  reduceMutableObject
} from './reduce-methods';

const howMany = 20_000;
const data = [...Array(howMany).keys()];

const time = (method: Function): number => {
  const start = new Date();
  method();
  return (new Date()).valueOf() - start.valueOf();
}

const main = () => {
  const methods = [
    reduceImmutableMap,
    reduceImmutableObject,
    reduceMutableMap,
    reduceMutableObject,
  ];

  methods.forEach((method) => {
    const milliseconds = time(() => method(data));
    console.log(`Completed ${method.name} in ${(milliseconds/1000)}ms`);
  });
};

main();

/*

Results on 2022-10-07 with howMany set to 20_000:

Completed reduceImmutableMap in 20.905ms
Completed reduceImmutableObject in 0.724ms
Completed reduceMutableMap in 0.002ms
Completed reduceMutableObject in 0.001ms

*/
