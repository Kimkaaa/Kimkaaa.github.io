// data.js 파일에서 const question = [] 만 가져옵니다.

import {questions} from './data.js';

// console.log(questions[0].choices[0].value);

// 연결한 data.js 파일에서 가져옴 querySelector() 사용
const progressValueEl = document.querySelector('.progress .value');
const numberEl = document.querySelector('.number');
const questioneEl = document.querySelector('.question');
const choice1El = document.querySelector('.choice1');
const choice2El = document.querySelector('.choice2');

let currentNumber = 0;
let mbti = '';
let question = '';

function renderQuestion(){
    question = questions[currentNumber];
    numberEl.innerHTML = question.number;
    questioneEl.innerHTML = question.question;
    choice1El.innerHTML = question.choices[0].text;
    choice2El.innerHTML = question.choices[1].text;
    progressValueEl.style.width = (currentNumber+1)*10+'%';
}

renderQuestion();       // 함수 선언만 한다고 돌아가지 않음, 불러줘야 돌아감

// 이벤트 리스너 : 특정한 이벤트가 발생하면 이 함수를 실행해
choice1El.addEventListener('click',function(){
    nextQuestion(0)})
choice2El.addEventListener('click',function(){
    nextQuestion(1)})
    // 클릭하면 해당 함수 실행하시오

// 중복 실행하는 코드 함수로 묶어줌
function nextQuestion(choiceNumber){
    mbti = mbti + question.choices[choiceNumber].value;
    // console.log(mbti);
    if(currentNumber === questions.length-1){           // 마지막 페이지에서
        location.href = './results.html?mbti=' + mbti;  // 리절트 페이지 넘어가면서, mbti 값 가져가게
    }                               // queryString     // HTTP Method -- Get방식
    currentNumber = currentNumber + 1;
    renderQuestion();
}