// setTimeout(function() {
//   document.body.style.backgroundColor = "red";
//   setTimeout(function() {
//     document.body.style.backgroundColor = "green";
//     setTimeout(function() {
//       document.body.style.backgroundColor = "blue";
//     }, 1000);
//   }, 1000);
// }, 1000);

const changeColor = (color, delay, callBackFunc) => {
  setTimeout(() => {
    document.body.style.backgroundColor = color;
    callBackFunc();
  }, 1000);
};

// 2,3개 정도의 콜백은 괜찮으나 너무 많으면 가독성에 좋지 않음

changeColor('red', 1000, () => changeColor('blue', 1000));