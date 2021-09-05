desc("`ValueOf`", () => {
  desc("Object", () => {
    tsIsEqual<
      ValueOf<{"a": "a", "b": "b"}>,
      "a"|"b"
    >(true)
    tsIsEqual<
      ValueOf<{"a": "a", "b": "b"}, "a">,
      "a"
    >(true)
  })

  desc("Array", () => {
    tsIsEqual<
      ValueOf<[1, 2]>,
      1|2
    >(true)
    tsIsEqual<
      ValueOf<[1, 2], 0>,
      1
    >(true)
  })

  desc("TODO Union of array and object", () => {
    type Source = [1, 2]|{"a": "a", "b": "b"}
    type Probe = ValueOf<Source>
    
    tsIsEqual<
      Probe,
      1|2|"a"|"b"
    >(
      //@ts-expect-error TODO
      true
    )
    tsIsEqual<
      Probe,
      1|2
    >(true)
    tsIsEqual<
      keyof Source,
      never
    >(true)
    tsIsEqual<
      PropOf<Source>,
      "a"|"b"
    >(true)
  })

  tsIsEqual<
    ValueOf<[1, 2]|{0: "a", "1": "b"}, 0>,
    1|"a"
  >(true)
})