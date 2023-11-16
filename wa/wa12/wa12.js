const newButton = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
const answerButton = document.querySelector('#js-tweet').addEventListener('click', displayAnswer);
const questionText = document.querySelector('#js-quote-text');

let answerText = document.querySelector('#js-answer-text');
let answer = '';

const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

async function getQuote() {
    try {
        const response = await fetch(endpoint);
        if(!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        //console.log(json);
        displayQuote(json['question']);
        answer = json['answer'];
        answerText.textContent = '';
    }

    catch(err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function displayQuote(question) {
    //const questionText = document.querySelector('#js-quote-text');
    questionText.textContent = question;
}

function displayAnswer() {
    //const answerText = document.querySelector('#js-answer-text');
    answerText.textContent = answer;
}

// function testFunction() {
   //console.log("Answer button clicked");
//}

getQuote();


