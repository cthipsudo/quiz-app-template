/* eslint-disable indent, no-undef, quotes*/

const currentQuestion = 0;
const questionsCorrect = 0;
const questionsRightOrWrong = false;
const startScreen= {
        title: `Title of Quiz here.`,
        header: `Take this quiz and find out!`,
        image: ""
    };
const questions = [
        {
            name: "Question One",
            answers: ["AnswerOne", "AnswerTwo", "AnswerThree", "AnswerFour"],
            correctAnswer: [""]
        },
        {
            name: "Question Two",
            answers: ["AnswerOne", "AnswerTwo", "AnswerThree", "AnswerFour"],
            correctAnswer: [""]
        },
        {
            name: "Question Three",
            answers: ["AnswerOne", "AnswerTwo", "AnswerThree", "AnswerFour"],
            correctAnswer: [""]
        },
        {
            name: "Question Four",
            answers: ["AnswerOne", "AnswerTwo", "AnswerThree", "AnswerFour"],
            correctAnswer: [``]
        },
        {
            name: "Question Five",
            answers: ["AnswerOne", "AnswerTwo", "AnswerThree", "AnswerFour"],
            correctAnswer: [""]
        },
    
    ];
const responses = [
        {
            name: "response1",
            responses: [`ResponseRight`, `ResponseWrong`],
            image: ""
        },
        {
            name: "response2",
            responses: [`ResponseRight`, `ResponseWrong`],
            image: ""
        },
        {
            name: "response3",
            responses: [`ResponseRight`, `ResponseWrong`],
            image: ""
        },

    ];

const result = {
        title: "TOTAL SCORE",
        response:[`A perfect score! What?!?\n Sounds like you really are Zach from ROI ONLINE and if you are. I just want you to know that I love you and wish you the best. \n-With High Hopes, Oscar`, `You missed a few but hey, you're still Zach Morris in my heart.`,`Oh so you're THAT Zach Morris...`],
        image: [`/images/Zach-and-Oscar.png`,`/images/Zach.png`,`/images/FakeZake.jpg`],
        resultOneCounter: 0
    };


export default {
    currentQuestion,
    questionsCorrect,
    questionsRightOrWrong,
    startScreen,
    questions,
    responses,
    result
};