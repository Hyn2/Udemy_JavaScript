const color = (color, delay) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  })
}

color('red',1000)
.then(() => color('green', 1000))
.then(() => color('blue', 1000))
.then(() => color('red', 1000))
.then(() => color('green', 1000))
.then(() => color('blue', 1000))
.then(() => color('red', 1000))
