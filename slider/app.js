const right = document.querySelector('.right');
const left = document.querySelector('.left');
const imgContainer = document.querySelector('.img-contain');
const image = document.querySelector('img');
const nav = document.querySelector('.nav');

let margin = 0;

const goRight = () => {
    margin -= image.clientWidth;
    if(margin <= -imgContainer.clientWidth) {
      margin = (-imgContainer.clientWidth) + image.clientWidth;
      return
    }
    imgContainer.style = `transform: translate(${margin}px); transition: all 1s;`
    console.log(margin)
  }

  const goLeft = () => {
    margin += image.clientWidth;
    if(margin > 0) {
      margin = 0
      return
    }
    imgContainer.style = `transform: translate(${margin}px); transition: all 1s;`
    console.log(margin)
  }

  const slide = () => {
    console.log(margin)
    if(margin <= 0) {
      goRight()
    }
  }

  right.onclick = goRight;
  left.onclick = goLeft;

  //setInterval(slide, 3000)
  //console.log(imageWidth);