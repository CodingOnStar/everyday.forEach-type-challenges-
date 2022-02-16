type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

function myReadonly(todo) {
  const obj = {};
  for (let key in todo) {
    obj["readonly" + key] = todo[key];
  }
  return obj;
}

// 1. mapped keyof
// 2. lookup
