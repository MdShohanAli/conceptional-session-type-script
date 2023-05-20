// first show normal function 
// than make normal function to ts function

function heroNormalFunction(a: number, b: number): string {
    const sum = a + b
    return `Sum: ${sum} `
}

// console.log(heroNormalFunction(2, 3));

//arrow function 

const heroArrowFun = (c: number, d: number): number => {
    return c + d
}

console.log(heroArrowFun(4, 5));

