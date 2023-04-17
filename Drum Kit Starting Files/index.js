let buttonLength = document.querySelectorAll(".drum").length;


// for문으로 반복하여 모든 버튼에 이벤트 리스너를 추가시킴
function buttonSound(key) {
  switch(key) {
    case 'w' :
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;
    case 'a' :
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;
    case 's' :
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;
    case 'd' :
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;
    case 'j' :
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;
    case 'k' :
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;
    case 'l' :
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
    break;
  }
}

function buttonAnimation(currentKey) {
  let activeButton =   document.querySelector("."+currentKey);
  activeButton.classList.add('pressed');
  setTimeout(function() {
    activeButton.classList.remove('pressed');
  }, 100)
};

for(let i = 0; i < buttonLength; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {  
    let drumSelector = this.innerHTML;
    buttonSound(drumSelector);
    buttonAnimation(drumSelector);
  });
    // 여기서 This는 이벤트 리스너를 발생시킨 요소
};

document.addEventListener("keypress", function(event) { 
  buttonSound(event.key);
  buttonAnimation(event.key);
});
// 익명함수를 이용
// 함수를 따로 선언하는 것보다 코드가 간결해진다
// document.querySelector("button").addEventListener("click", function () { alert("i got clicked") });

