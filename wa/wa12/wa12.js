const newButton = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
const answerButton = document.querySelector('#js-tweet').addEventListener('click', displayAnswer);
const questionText = document.querySelector('#js-quote-text');

let answerText = document.querySelector('#js-answer-text');
let answer = '';

const endpoint = 'https://www.boredapi.com/api/activity';

async function getQuote() {
    try {
        const response = await fetch(endpoint);
        if(!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        console.log(json);

        displayQuote(json['activity']);
        answer = json['type'];
        answerText.textContent = '';
    }
    catch(err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function displayQuote(activity) {
    //const questionText = document.querySelector('#js-quote-text');
    questionText.textContent = activity;
    document.body.style.backgroundColor = "rgb(0, 128, 148)";
}

function displayAnswer() {
    //const answerText = document.querySelector('#js-answer-text');
    answerText.textContent = answer;
    document.body.style.backgroundColor = "rgba(250,150,150,0.35";   
}

// function testFunction() {
   //console.log("Answer button clicked");
//}

//getQuote();


