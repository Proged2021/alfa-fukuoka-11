const div = document.getElementById("div");
const yesButton = document.getElementById("yes");
const button1 = document.getElementById("button1");
const noButton = document.getElementById("no");
const audio = new Audio("introduction.mp3");
var ele = document.documentElement;

function hideDiv() {
div.style.display = "none";
}
yesButton.addEventListener("click", () => {
audio.play();
video.play();
hideDiv();
ele.requestFullscreen();
setTimeout(function(){
window.location.href = 'inport.html';
},99*1000);
});
noButton.addEventListener("click", () => {
video.play();
hideDiv();
ele.requestFullscreen();
setTimeout(function(){
    window.location.href = 'inport.html';
    },99*1000);
});
button1.addEventListener("click", () => {
    if (window.confirm("ストーリーをスキップしますか？")) {
    window.location.href = 'inport.html';
    }
    });