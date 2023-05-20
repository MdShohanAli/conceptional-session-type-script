// all data type for use type alisa 
type HeroIncomeType = number | string // ( | --> it call union )
const heroIncome: HeroIncomeType = 34;

type HeroType = {
    name: string;
    age: number;
}
const hero4: HeroType = {
    name: 'khan',
    age: 32
}
const hero5: HeroType = {
    name: 'hero',
    age: 55
}