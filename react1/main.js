const root = document.querySelector('#root');
const mainElFrist = "<div class='main'>";
const mainElLast = "</div>";

const titleElFirst = "<div class='title'>";
const titleElLast = "</div>";

const ulElFirst = "<ul>";
const ulElLast = "</ul>";

const liElFirst = "<li>";
const liElLast = "</li>";



const titleContent = "리액트를 잘 하려면?"
const howToMasterReact =[
    "자바스크립트를 잘해야 한다.",
    "CSS를 잘해야 한다.",
    "HTML을 잘 해야 한다",
];

const liArray = howToMasterReact.map((v,i) => { //맵함수 리액트에서 자주 사용 배열 반복적으로 처리할때
    return `${liElFirst}${i+1}. ${v}${liElLast}`
});

console.log(liArray);
// console.log(...liArray);  //리액트에서 자주사용

root.innerHTML = 
mainElFrist + 
titleElFirst + 
titleContent + 
titleElLast + 
ulElFirst+
liArray+
ulElLast+
mainElLast;