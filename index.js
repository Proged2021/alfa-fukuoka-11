const div = document.getElementById("div");
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const audio = new Audio("introduction.mp3");

function hideDiv() {
div.style.display = "none";
}
yesButton.addEventListener("click", () => {
audio.play();
video.play();
hideDiv();
setTimeout(function(){
window.location.href = 'inport.html';
},113*1000);
});
noButton.addEventListener("click", () => {
video.play();
hideDiv();
setTimeout(function(){
    window.location.href = 'inport.html';
    },110*1000);
});
