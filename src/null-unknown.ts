// null

const myText = (text: string | null): void => {
    if (text === null) {
        console.log("I have no text");
    }
    else {
        console.log(text);

    }
}

// myText(null)
// myText('This is not a null value')

// unknown type we are can not guess anything 

const guessSomething = (myGuess: unknown) => {
    console.log(myGuess);

}

guessSomething(23);
guessSomething("hello");
guessSomething(null);
guessSomething(undefined);
guessSomething(true)
