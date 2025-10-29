const menus = document.querySelectorAll('.menu_txt');
const texts = document.querySelectorAll('.middle_txt');

menus.forEach(menu => {
    menu.addEventListener('click', () => {
        // 모든 글 숨기기
        texts.forEach(t => t.style.display = 'none');

        // 클릭한 메뉴에 해당하는 글 보이기
        if (menu.classList.contains('mh1')) texts[0].style.display = 'block';
        if (menu.classList.contains('mh2')) texts[1].style.display = 'block';
        if (menu.classList.contains('mh3')) texts[2].style.display = 'block';

        // 모든 메뉴 active 제거
        menus.forEach(m => m.classList.remove('active'));
        // 클릭한 메뉴 active 추가
        menu.classList.add('active');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const arrowBtn = document.querySelector(".arrow_btn");

    arrowBtn.addEventListener("click", () => {
        document.querySelector("#main_container1").scrollIntoView({
            behavior: "smooth" // 부드럽게 스크롤
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const arrowBtn = document.querySelector(".arrow_btn");
    const section1 = document.querySelector("#main_container1");

    // 클릭 시 맨 위(#main_container1)로 스크롤
    arrowBtn.addEventListener("click", () => {
        section1.scrollIntoView({ behavior: "smooth" });
    });

    // section1이 화면에 보이면 버튼 숨김, 벗어나면 표시
    const io = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            arrowBtn.classList.remove("is-visible");  // #main_container1 영역일 때 숨김
        } else {
            arrowBtn.classList.add("is-visible");     // 그 밖의 영역(= #main_container2 이후)에서 보임
        }
    }, { threshold: 0.1 });

    io.observe(section1);
});


// ps1 안 p 태그들
const psItems = document.querySelectorAll(".ps1 p");
const modal = document.getElementById("modal");
const modalTitle = modal.querySelector(".modal-title");
const modalDesc = modal.querySelector(".modal-desc");
const modalImg = modal.querySelector(".modal-img");
const closeBtn = modal.querySelector(".close");

// 각 p 태그에 데이터 속성 추가 (원래 HTML에서 data-*로 해도 됨)


const contentData = {
    "@ 마침표": {
        title: "마침표",
        desc: "@ 서술, 명령, 청유 등을 나타내는 문장의 끝에 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 가는 말이 고와야 오는 말이 곱다.<br>@ 아라비아 숫자만으로 연월일을 표시할 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 2025.7.25.<br>@ 특정한 의미가 있는 날을 표시할 때 월과 일을 나타내는 아라비아 숫자 사이에 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 8.15 광복절<br>@ 장, 절, 항 등을 표시하는 문자나 숫자 다음에 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- ㄱ.머리말 / 1.연구 목적<br><br>● 제목이나 표어에는 쓰지 않음<br>● '마침표' 대신 '온점' 사용 가능",
        img: "img/p_1.svg"
    },
    "@ 소괄호": {
        title: "소괄호",
        desc: "@ 주석이나 보충적인 내용을 덧붙일 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 니체(독일의 철학자)의 말<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 2025. 12. 19.(금)<br>@ 우리말 표기와 원어 표기를 아울러 보일 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 기호(嗜好)/ 커피(coffee)<br>@ 생략할 수 있는 요소 표현<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 광개토(대)왕은 고구려의 전성기를 이끌었다.<br>@ 희곡 등 대화를 적은 글에서 동작이나 분위기, 상태를 드러낼 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 현우: (가쁜 숨을 내쉬며) 왜 이렇게 빨리 뛰어? / 하하하(웃음)<br>@ 내용이 들어갈 자리임을 나타낼 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 우리나라의 수도는 ()이다.<br>@ 항목의 순서나 종류를 나타내는 숫자나 문자 등에 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- (가)동해, (나)서해, (다)남해",
        img:  "img/p_2.svg"
    },
    "@ 중괄호": {
        title: "중괄호",
        desc: "@ 같은 범주에 속하는 여러 요소를 세로로 묶을 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 국가의 성립 요소 {영토 국민 주권}<br>@ 열거된 항목 중 어느 하나가 자유롭게 선택될 수 있을 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 모두 학교{에, 로, 까지} 갔다. ",
        img:  "img/p_3.svg"
    },
    "@ 대괄호": {
        title: "대괄호",
        desc: "@ 괄호 안에 또 괄호를 쓸 필요가 있을 때 바깥쪽의 괄호로 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- [김철수(팀장)], [홍길동(과장)]<br>@ 고유어에 대응하는 한자를 함께 보일 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 손발[手足]<br>@ 원문에 대한 이해를 돕기 위해 설명이나 논평 등을 덧붙일 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 그것[한글]은 과학적인 문자이다.",
        img:  "img/p_4.svg"
    },
    "@ 겹낫표": {
        title: "겹낫표",
        desc: "@ 책의 제목이나 신문 이름 등을 나타낼 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 『훈민정음』은 1997년에 유네스코 세계 기록 유산으로 지정되었다.<br><br>● 겹낫표 대신 큰따옴표 사용 가능",
        img:  "img/p_5.svg"
    },
    "@ 밑줄": {
        title: "밑줄",
        desc: "@ 문장 내용 중에서 주의가 미쳐야 할 곳이나 중요한 부분을 특별히 드러내 보일 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 한글의 본디 이름은 ___이다.<br><br>● 밑줄 대신 작은따옴표 사용 가능",
        img:  "img/p_6.svg"
    },
    "@ 물음표": {
        title: "물음표",
        desc: "@ 의문문이나 의문을 나타내는 어구의 끝에 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 점심 먹었어?<br>@ 특정한 어구의 내용에 대하여 의심, 빈정거림 등을 표시할 때 소괄호 안에 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 30점, 거참 훌륭한(?) 성적이군<br>@ 모르거나 불확실한 내용임을 나타낼 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 조선 시대의 시인 강백(1690?~1777?)<br><br>● 한 문장 안에 몇 개의 선택적인 물음이 이어질 때는 맨 끝의 물음에만, 각 물음이 독립적일 때는 각 물음의 뒤에 쓴다.<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 너는 중학생이냐, 고등학생이냐? / 너는 여기에 언제 왔니? 어디서 왔니? 무엇하러 왔니?<br>● 의문의 정도가 약할 때는 물음표 대신 마침표 사용 가능<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 이것이 과연 내가 찾던 행복일까.",
        img:  "img/p_7.svg"
    },
    "@ 물결표": {
        title: "물결표",
        desc: "@ 기간이나 거리 또는 범위를 나타낼 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 9월 15일~9월 25일<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 서울~천안 정도는 출퇴근이 가능하다.<br><br>● 물결표 대신 붙임표 사용 가능",
        img:  "img/p_8.svg"
    },
    "@ 큰따옴표": {
        title: "큰따옴표",
        desc: "@ 글 가운데에서 직접 대화를 표시할 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- “어머니, 제가 갈께요.”<br>@ 말이나 글을 직접 인용할 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 나는 “누구냐?” 하는 소리에 깜짝 놀랐다.",
        img: "img/p_9.svg"
    },
    "@ 줄표": {
        title: "줄표",
        desc: "@제목 다음에 표시하는 부제의 앞뒤에 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- ‘환경 보호 ― 숲 가꾸기 ―’라는 제목으로 글짓기를 했다.<br>@ 뒤에 오는 줄표는 생략 가능<br>&nbsp&nbsp&nbsp&nbsp&nbsp- ‘환경 보호 ― 숲 가꾸기’라는 제목으로 글짓기를 했다. <br><br>● 줄표의 앞뒤는 띄어 쓰는 것을 원칙으로 하되, 붙여 쓰는 것도 허용",
        img:  "img/p_10.svg"
    },
    "@ 홑낫표": {
        title: "홑낫표",
        desc: "@ 소제목, 그림이나 소제목, 그림이나 노래와 같은 예술 작품의 제목, 상호, 법률, 규정 등을 나타낼 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 「국어 기본법 시행령」은 「국어 기본법」에서 위임된 사항과 그 시행에 필요한 사항을 규정함을 목적으로 한다.<br><br>● 홑낫표 대신 작은따옴표 사용 가능",
        img:  "img/p_11.svg"
    },
    "@ 드러냄표": {
        title: "드러냄표",
        desc: "@ 문장 내용 중에서 주의가 미쳐야 할 곳이나 중요한 부분을 특별히 드러내 보일 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 한글의 본디 이름은 훈˙민˙정˙음˙이다.<br><br>● 드러냄표 대신 작은따옴표 사용 가능",
        img: "img/p_12.svg"
    },
    "@ 느낌표": {
        title: "느낌표",
        desc: "@ 감탄문이나 감탄사의 끝에 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 어머!<br>@ 특별히 강한 느낌을 나타내는 어구, 평서문, 명령문, 청유문에 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 청춘! 이는 듣기만 하여도 가슴이 설레는 말이다.<br>@ 물음의 말로 놀람이나 항의의 뜻을 나타내는 경우에 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 내가 왜 나빠!<br>@ 감정을 넣어 대답하거나 다른 사람을 부를 때 사용<br>@ 네, 선생님!<br><br>● 감탄의 정도가 약할 때는 느낌표 대신 쉼표나 마침표 사용 가능<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 날씨가 참 좋군.",
        img: "img/p_13.svg"
    },
    "@ 가운뎃점": {
        title: "가운뎃점",
        desc: "@ 열거할 어구들을 일정한 기준으로 묶어서 나타낼 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 민수·영희, 선미·준호가 서로 짝이 되어 윷놀이를 하였다.<br>@ 짝을 이루는 어구들 사이에 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 하천 수질의 조사·분석<br>@ 공통 성분을 줄여서 하나의 어구로 묶을 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 금·은·동메달<br><br>● 가운뎃점 대신 쉼표 사용 가능 ",
        img: "img/p_14.svg"
    },
    "@ 작은따옴표": {
        title: "작은따옴표",
        desc: "@ 인용한 말 안에 있는 인용한 말을 나타낼 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 그는 “여러분! ‘시작이 반이다.’라는 말 들어 보셨죠?”라고 말하며 강연을 시작했다.<br>@ 마음속으로 한 말을 적을 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 나는 ‘일이 다 틀렸나 보군.’ 하고 생각하였다.",
        img: "img/p_15.svg"
    },
    "@ 붙임표": {
        title: "붙임표",
        desc: "@ 차례대로 이어지는 내용을 하나로 묶어 열거할 때 각 어구 사이에 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 김 과장은 기획-실무-홍보까지 직접 발로 뛰었다.<br>@ 두 개 이상의 어구가 밀접한 관련이 있음을 나타내고자 할 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 서울-북경의 항로가 열렸다.",
        img: "img/p_16.svg"
    },
    "@ 겹화살괄호": {
        title: "겹화살괄호",
        desc: "@ 책의 제목이나 신문 이름 등을 나타낼 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- ≪한성순보≫는 우리나라 최초의 근대 신문이다.<br><br>● 겹화살 괄호 대신 큰따옴표 사용 가능",
        img: "img/p_17.svg"
    },
    "@ 숨김표": {
        title: "숨김표",
        desc: "@ 금기어나 공공연히 쓰기 어려운 비속어임을 나타낼 때, 그 글자의 수효만큼 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 그 말을 듣는 순간 ×××란 말이 목구멍까지 치밀었다.<br>@ 비밀을 유지해야 하거나 밝힐 수 없는 사항임을 나타낼 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 1차 시험 합격자는 김○영, 이○준, 박○순 등 모두 3명이다. ",
        img: "img/p_18.svg"
    },
    "@ 쉼표": {
        title: "쉼표",
        desc: "@ 같은 자격의 어구를 열거할 때 그 사이에 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 5보다 작은 자연수는 1, 2, 3, 4이다.<br>@ 부르거나 대답하는 말 뒤에 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 네, 지금 가겠습니다.<br>@  바로 다음 말과 직접적인 관계에 있지 않음을 나타낼 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 갑돌이는, 울면서 떠나는 갑순이를 배웅했다.<br>@ 짧게 더듬는 말을 표시할 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 선생님, 부, 부정행위라니요?<br><br>● 끼어든 어구 안에 다른 쉼표가 들어 있을 때는 쉼표 대신 줄표 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 이건 내 것이니까 ― 아니, 내가 처음 발견한 것이니까<br>● '쉼표' 대신 '반점'용어 사용 가능",
        img: "img/p_19.svg"
    },
    "@ 쌍점": {
        title: "쌍점",
        desc: "@ 표제 다음에 해당 항목을 들거나 설명을 붙일 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 문방사우: 종이, 붓, 먹, 벼루<br>@ 희곡 등에서 대화 내용을 제시할 때 말하는 이와 말한 내용 사이에 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 아들: 아버지, 제발 제 말씀 좀 들어 보세요.<br>@ 시와 분, 장과 절 등을 구별할 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 오전 10:20<br>@ 의존명사 ‘대’가 쓰일 자리에 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 65:60(65 대 60)<br><br>● 쌍점의 앞은 붙여 쓰고 뒤는 띄어씀",
        img: "img/p_20.svg"
    },
    "@ 빗금": {
        title: "빗금",
        desc: "@ 대비되는 두 개 이상의 어구를 묶어 나타낼 때 그 사이에 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 남반구/북반구<br>@ 기준 단위당 수량을 표시할 때 해당 수량과 기준 단위 사이에 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 1,000원/개<br>@ 시의 행이 바뀌는 부분임을 나타낼 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 산에 / 산에 / 피는 꽃은 / 저만치 혼자서 피어 있네<br><br>● 빗금의 앞뒤는 붙여 쓰며, 시에서는 띄어 쓰는 것을 원칙으로 하되 붙여 쓰는 것을 허용",
        img: "img/p_21.svg"
    },
    "@ 줄임표": {
        title: "줄임표",
        desc: "@ 할 말을 줄였을 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- “어디 나하고 한번…….”<br>@ 말이 없음을 나타낼 때 사용<br>@ 문장이나 글의 일부를 생략할 때 사용<br>@ 머뭇거림을 보일 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- “우리는 모두…… 그러니까…… 예외 없이 눈물만…… 흘렸다.”<br><br>● 점은 가운데와 아래쪽에 찍을 수 있음.",
        img: "img/p_22.svg"
    },
    "@ 홑화살괄호": {
        title: "홑화살괄호",
        desc: "@ 소제목, 그림이나 소제목, 그림이나 노래와 같은 예술 작품의 제목, 상호, 법률, 규정 등을 나타낼 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 백남준은 2005년에 <엄마>라는 작품을 선보였다.<br><br>● 홑화살괄호 대신 작은따옴표 사용 가능",
        img: "img/p_23.svg"
    },
    "@ 빠짐표": {
        title: "빠짐표",
        desc: "@ 옛 비문이나 문헌 등에서 글자가 분명하지 않을 때 그 글자의 수효만큼 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 大師爲法主□□賴之大□薦<br>@ 글자가 들어가야 할 자리를 나타낼 때 사용<br>&nbsp&nbsp&nbsp&nbsp&nbsp- 훈민정음의 초성 중에서 아음(牙音)은 □□□의 석 자다.<br><br>● 빠짐표는 문장의 어느 곳에나 쓸 수 있으므로 띄어쓰기가 일정하지 않음 ",
        img: "img/p_24.svg"
    }
};

// 클릭 이벤트
psItems.forEach(p => {
    p.addEventListener("click", () => {
        const key = p.textContent.trim();
        if (contentData[key]) {
            modalTitle.textContent = contentData[key].title;
            modalDesc.innerHTML = contentData[key].desc;
            modalImg.src = contentData[key].img;
            modal.style.display = "block";
        }
    });
});

// 모달 닫기
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// 모달 바깥 클릭 시 닫기
window.addEventListener("click", e => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});



document.addEventListener("mousemove", function(e) {
    const back = document.querySelector('.main_back');
    const moveImg = document.querySelector('.main_move');

    const rect = back.getBoundingClientRect();

    const maxMoveX = rect.width * 0.15; // 좌우 최대 이동 (15% 정도)
    const maxMoveY = rect.height * 0.10; // 상하 최대 이동 (15% 정도)

    // .main_back 영역 안에서 마우스 위치 비율 계산 (0 ~ 1)
    let offsetX = (e.clientX - rect.left) / rect.width;
    let offsetY = (e.clientY - rect.top) / rect.height;

    // -0.5 ~ 0.5 범위로 조정
    offsetX -= 0.5;
    offsetY -= 0.5;

    const moveX = offsetX * 1 * maxMoveX; 
    const moveY = offsetY * 1 * maxMoveY;

    moveImg.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

document.addEventListener("DOMContentLoaded", () => {
    const finalImg = document.querySelector(".final_img");
    const container5 = document.querySelector("#main_container5");

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                // #main_container5가 화면에 보이면 .visible 추가 → 투명도 100%
                finalImg.classList.add("visible");
            } else {
                // 화면 밖으로 나가면 다시 제거 → 투명도 0%
                finalImg.classList.remove("visible");
            }
        },
        {
            root: null,          // viewport 기준
            threshold: 0.1       // 10% 이상 보이면 발동
        }
    );

    observer.observe(container5);
});
