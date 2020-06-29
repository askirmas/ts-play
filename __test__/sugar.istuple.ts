type TupleKeys = "0" | "1" | "2"
type TupleCheck<T extends readonly unknown[]> = AreEqualE<Indexes<T>, TupleKeys>

const emptyArray: EmptyArray = []
, emptyArrayIsTupleL: IsTupleL<typeof emptyArray> = false 
, emptyArrayIsTupleI: IsTupleI<typeof emptyArray> = true
, emptyArrayCheck: TupleCheck<typeof emptyArray> = false

, someArray = [1, 2, 3]
, someArrayIsTupleL: IsTupleL<typeof someArray> = false 
, someArrayIsTupleI: IsTupleI<typeof someArray> = true 
, someArrayCheck: TupleCheck<typeof someArray> = false

, tupleConst = [1, 2, 3] as const
, tupleConstIsTupleL: IsTupleL<typeof tupleConst> = true 
, tupleConstIsTupleI: IsTupleI<typeof tupleConst> = true 
, tupleConstCheck: TupleCheck<typeof tupleConst> = true

, tupleTyped: [number, number, number] = [1, 2, 3]
, tupleTypedIsTupleL: IsTupleL<typeof tupleTyped> = true 
, tupleTypedCheck: TupleCheck<typeof tupleTyped> = true

, tupleTypedOpt: [number, number, number?] = [1, 2, 3]
, tupleTypedOptIsTupleL: IsTupleL<typeof tupleTypedOpt> = true
, tupleTypedOptLength: "0" extends Indexes<typeof tupleTypedOpt> ? true : false = true
, tupleTypedOptCheck: TupleCheck<typeof tupleTypedOpt> = true

