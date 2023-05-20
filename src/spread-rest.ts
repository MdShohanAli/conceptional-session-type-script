// spread operator
const heroArray1: string[] = ['khan', 'jalil', 'faruk', 'razzak']
const heroArr2: string[] = ['alom', 'faruk', 'razzak']

// array distr
const [hero1, hero2, xyz] = heroArray1
console.log(hero1, hero2);


heroArray1.push(...heroArr2);
// console.log(heroArray1);

// normal use parameter 


// const heroScore = (score:number, score1: number, score2: number): number => {
//     return score + score1 + score2
// }
// console.log(heroScore(1, 3, 4, 7, 0));

//  rest parameter 
// proti ta argument jonnho akta alada  parameter nite hoi but  , akta parameter dea kag hoi 
// 

const heroScore = (...score: number[]): number => {
    let sum: number = 0;
    score.map(n => {
        sum = sum + n
    })

    return sum
}
console.log(heroScore(1, 3, 4, 7, 0, 5, 6));

//  agin
//...score => ai 3 ta k use korle ata k spread opearator 

const naykaScore = (...score: number[]): number => {
    let sum = 0;
    score.map(x => {
        sum = sum + x
    })
    return sum

}

// console.log(naykaScore(1, 2, 3, 4, 5));

// another    for string value 

const heroString = (...string: string[]): void => {
    string.map(str => console.log(str))
}
heroString('ph', 'next level', 'web')

