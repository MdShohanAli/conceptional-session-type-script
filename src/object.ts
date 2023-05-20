const heroObj: {
    heroNames: string,
    readonly age: number,
    profession: string,
    isMarried?: boolean
} = {
    heroNames: "khan",
    age: 32,
    profession: 'Actor',
    // isMarried: true
}
// heroObj.age = 40;

// object  destaring
const { heroNames } = heroObj;
console.log(heroNames);


console.log(heroObj);
