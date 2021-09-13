'use strict';

const contract = (fn, ...types) => (...args) => {
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    const type = types[i];
    if (typeof arg !== type.name.toLowerCase()) {
      throw new TypeError('wrong data type provided');
    }
  }
  const res = fn(...args);
  if (typeof res !== types.pop().name.toLowerCase()) {
    throw new TypeError('expected different result type');
    } else {
        return res;
    }
};

module.exports = { contract };
