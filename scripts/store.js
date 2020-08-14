/* eslint-disable indent, no-undef, quotes*/

const STORE = {
    currentQuestion: 0,
    questionsCorrect: 0,
    questionsRightOrWrong: false,
    startScreen: {
        title: `Are you Zach Morris or are you "Zach Morris"?`,
        header: `Take this quiz and find out!`,
        image: "/images/zach-gif.gif"
    },
    questions: [
        {
            name: "Do you like to make Bad Jokes?",
            answers: ["Yes", "Not really", "Bad Jokes are only bad if you think they're bad...", "They're GOOD if you ask me"],
            correctAnswer: ["Yes", "Bad Jokes are only bad if you think they're bad...", "They're GOOD if you ask me"]
        },
        {
            name: "Are you a coffee snob?",
            answers: ["Call me a Coffee Aficionado", "I only drink topo chicos", "One Cold Brew Latte, please...", "I don't drink coffee"],
            correctAnswer: ["I only drink topo chicos", "One Cold Brew Latte, please...", "Call me a Coffee Aficionado"]
        },
        {
            name: "Do you collect records?",
            answers: ["Yea, man.", "I only collect pokemon", "Ptffhh!! I use Apple Music","Guess you could say I'm sort of a world record myself ;)"],
            correctAnswer: ["Yea man.", "I only collect pokemon", "Guess you could say I'm sort of a world record myself ;)"]
        },
        {
            name: "What kind of music do you listen to?",
            answers: ["Country", `Demi Lavato`, "Rock","Hip-Hop"],
            correctAnswer: [`Demi Lavato`, "Rock","Hip-Hop"]
        },
        {
            name: "What's your poison?",
            answers: ["Craft Beers like IPAS and Stouts", "Wine", `"Lemon Drops"`, "Craft Beers like Goses and Sours bro"],
            correctAnswer: ["Craft Beers like IPAS and Stouts", "Craft Beers like Goses and Sours bro"]
        },
    
    ],
    responses:[
        {
            name: "response1 (This is an internal name, we won't have to use this value.)",
            responses: [`Voila! Of course a Magician would never be caught without a rabbit in their hat!`, ` Other pets are fine for the less magically inclined, but a true magician always has a furry friend in his hat.`],
            image: "magic rabbit.png"
        },
        {
            name: "response2 (This is an internal name, we won't have to use this value.)",
            responses: [`A magician has many favorite colors. You have great taste, too!`, `Wow! You are so boring. A magician would never be caught dead in brown!`],
            image:"magician outfit.png"
        },
        {
            name: "response3 (This is an internal name, we won't have to use this value.)",
            responses: [`Amazing! You are already performing magic! I love your scarf.`, `That is a sensible answer. However, it is not a very magical way to store your scarf.`],
            image:"magic scarves.png"        },
        {
            name: "response4 (This is an internal name, we won't have to use this value.)",
            responses: [`Abra kadabra! The wand is a perfect tool for wielding the magical elements. Impressive!`, `Ohhh... You seem to be pretty violent. Not exactly what we were looking for...`],
            image:"magic wand.png"
        },
        {
            name: "response5 (This is an internal name, we won't have to use this value.)",
            responses: [`Wow!! Thats right.`, `Not quite! A magician NEEDS to know every suit in a deck if they want to make cards appear from thin air!`],
            image:"magic-cards.png"
        },
        {
            name: "response6 (This is an internal name, we won't have to use this value.)",
            responses: [`Very nice! Sounds like an excellent spot to wow an audience!`, `While you are relaxing, there is a whole world of people being left unimpressed. Shame on you.`],
            image:"magic-audience.png"
        },
        {
            name: "win/lose screen",
            responses: [`HOW DID YOU DO THAT? Oh right, a magician never reveals their secret.`, `I'm sure your mother is very proud.`],
            image: "magic-finale.png"
        },

    ],
    result:{
        title: "TOTAL SCORE",
        response:[`A perfect score! What?!?\n Sounds like you really are Zach from ROI ONLINE and if you are. I just want you to know that I love you and wish you the best. \n-With High Hopes, Oscar`, `You missed a few but hey, you're still Zach Morris in my heart.`,`Oh so you're THAT Zach Morris...`],
        image: [`/images/Zach-and-Oscar.png`,`/images/Zach.png`,`/images/FakeZake.jpg`],
        zachCounter: 0
    }
};