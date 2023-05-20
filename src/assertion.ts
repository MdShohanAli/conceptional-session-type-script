// type assertion
const thinkSomething: unknown = 34.00;
console.log((thinkSomething as number).toFixed(2));

const thinkAbout: unknown = 'hello';
console.log((thinkAbout as string).length)

// const myLuckyNum = (num: string | number): number | string | undefined => {
//     if (typeof num === 'string') {
//         return "this is string"
//     }
//     else if (typeof num === 'number') {
//         return num;
//     }
// }
const myLuckyNum = (num: string | number): number | string => {
    if (typeof num === 'string') {
        return "this is string"
    }
    return num;
}