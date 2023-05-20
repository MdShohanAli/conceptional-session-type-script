type myArray<T> = Array<T>
//T = number
// Array<number>

const myNumbers: myArray<number> = [1, 2, 3, 4, 5, 6]
const myString: myArray<string> = ['axy', 'dbt', 'abc']
const myBoolean: Array<boolean> = [true, false, false, true]

const friendAge: myArray<number> = [1, 2, 3, 5]

// declare array of object
type dataType = { name: string, age: number }

const ourInfo: myArray<dataType> = [
    { name: 'fahim', age: 25 },
]
const student: myArray<dataType> = [
    { name: 'solman', age: 25 }
]

// tuple in generic 

type MyGenType<X, Y> = [X, Y]
type AnotherType<a, b, c> = [a, b, c]

const A: MyGenType<string, number> = ['hero', 34]
const B: MyGenType<number, string> = [32, 'Rohim']
const C: MyGenType<boolean, string> = [true, 'abc']
const D: AnotherType<number, string, boolean> = [20, 'helo', true]

// generic in function

const printInfo = <P, Q>(param1: P, param2: Q) => {
    console.log(`param1:${param1}, param2${param2}`);

}

printInfo<string, number>('fahim', 32)
printInfo<boolean, number>(true, 32)

// another example 
const myFriends = <A, B>(value1: A, value2: B): A => {
    console.log(`value:${value1},value${value2}`);
    return value1

}

myFriends<boolean, number>(true, 25)
//generic in interface

interface IMe<T, U> {
    name: string,
    age: T, // 23 year
    mark: U
}

const me: IMe<string, number> = {
    name: 'firoze',
    age: '23year',
    mark: 43
}
// another
interface IYou<E, R> {
    name: string,
    age: E,
    Phone: R,
}

const your: IYou<number, number> = {
    name: 'jalal',
    age: 23,
    Phone: 454

}
interface ISub<C, V> {
    name: C,
    test: V

}

const firstYear: ISub<string, boolean> = {
    name: 'applied',
    test: true
}
// key of 

type MovieType = {
    name: string,
    duration: number,
    category: string,
}

// type test = 'name' | 'duration' | 'category'
// const myTest: test = 'category'

const data: MovieType = {
    name: 'Agni 2',
    duration: 310,
    category: "Action"
}



type myMoviesType = keyof MovieType  // name , duration , category 

// const myTest1: myMoviesType = 'name'; // name , duration , category

// console.log(data['category']); --> another way

const myText11: myMoviesType = 'name'
console.log(data[myText11]);


