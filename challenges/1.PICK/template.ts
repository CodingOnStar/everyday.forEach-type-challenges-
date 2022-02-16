type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// extends对应element in todo(类型约束)， keyof对应ts的联合类型

// function myPick(todo: Object, keys: string[]): Object {
//   const obj = {};
//   keys.forEach((element) => {
//     if (element in todo) {
//       obj[element] = todo[element];
//     }
//   });
//   return obj;
// }
