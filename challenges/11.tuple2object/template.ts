type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P;
};

// keyof Array得到的是数组的索引index
// T[number]就是循环数组的内容

// function tuple2object(arr) {
//   const obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     obj[arr[i]] = arr[i];
//   }
//   return obj;
// }
