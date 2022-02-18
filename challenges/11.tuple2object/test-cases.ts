const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
// 此时typeof tuple是["tesla", "model 3", "model X", "model Y"] （字面量类型）
// 如果不加as const，就是string[]

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >
];
