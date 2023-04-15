  
  function rollTheDice() {
    let randomValue1 =Math.floor((Math.random() * 6) + 1);
    let randomValue2 =Math.floor((Math.random() * 6) + 1);
    document.querySelector(".img1").setAttribute("src", "./images/dice"+randomValue1+".png");
    document.querySelector(".img2").setAttribute("src", "./images/dice"+randomValue2+".png");
    if(randomValue1 > randomValue2) {
      document.querySelector("h1").innerHTML = "Player 1 Win!";
    } else if(randomValue1 < randomValue2) {
      document.querySelector("h1").innerHTML = "Player 2 Win!";
    } else {
      document.querySelector("h1").innerHTML = "Draw!";
    }
  }
  