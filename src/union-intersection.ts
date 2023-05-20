// && operator dea kicu k add kora k intersection 

type HeroTypeA = {
    name: string;
    age: number;
}

type HeroTypeB = HeroTypeA & {
    salary: number;
    position: string;
}

const HeroData: HeroTypeB = {
    name: 'jalal',
    age: 23,
    salary: 3545,
    position: 'developer'
}

// union type

const myFavHero: HeroTypeA | HeroTypeB = {
    name: 'jhan',
    age: 30,
    salary: 3454,
    position: 'Actor'
}
