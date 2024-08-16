import { results, mbtis } from "./data.js";
// http://127.0.0.1:5500/results.html?mbti=infp
// mbti=infp 이것을 뽑아내야 함
// 쿼리스트링
const mbti = new URLSearchParams(location.search).get('mbti');
// console.log(location.search);
// console.log(mbti);

// 1. 가져온 mbti 유형의 번호를 출력
// ?mbti=isfp ===> 2인 것을 출력
// console.log(mbtis[mbti]);

// 2. 위의 results 중 1번 결과에 해당하는 자료를 출력
// console.log(results[mbtis[mbti]]);

// 3. 그 중 결과의 제목을 출력
// console.log(results[mbtis[mbti]].title);

const result = results[mbtis[mbti]];

// 4. querySelector로 변수 선언
// --- innerHTML로 넣기
const title = document.querySelector('.page-title');
const resultCharacter = document.querySelector('.character');
const boxes = document.querySelectorAll('.box');  // 다 갖고 오는 거라 배열이 들어감
const jobs = document.querySelectorAll('.job');
const lectureUrl = document.querySelector('.lecture');
const lectureImage = document.querySelector('.lecture img'); // 렉처클래스 밑 이미지

title.innerHTML = result.title;
resultCharacter.src = result.character;
boxes.forEach(function(boxE1, index){
        boxE1.innerHTML = result.results[index];
});
jobs.forEach((job, index)=>{
        job.innerHTML = result.jobs[index];
});

lectureImage.src = result.lectureImg;
lectureUrl.href = result.lectureUrl;