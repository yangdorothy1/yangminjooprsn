// 1. 여기가 데이터베이스입니다. 원하는 문구를 추가/수정하세요.
const database = [
    "2-3-5-7 복습 규칙!",
    "암기할 내용은 코넬 노트로 정리하자",
    "그날 공부한 내용 자기 전 강의해 보기",
    "KEEP CALM AND STUDY",
    "DON'T PANIC!"
];

// 2. DOM 요소 가져오기
const messageBox = document.getElementById('message-box');
const nextBtn = document.getElementById('btn-next');

// 3. 랜덤 문구 뽑기 함수
function showRandomMessage() {
    // 로딩 효과 (레트로 느낌)
    messageBox.innerText = "...";
    
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * database.length);
        messageBox.innerText = database[randomIndex];
    }, 200); // 0.2초 딜레이
}

// 4. 버튼 클릭 이벤트
nextBtn.addEventListener('click', showRandomMessage);

// 5. 초기 실행
showRandomMessage();
