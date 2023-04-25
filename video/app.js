let btnCont = document.querySelector('.btn-container');
let slide = document.querySelector('.center');
let video = document.querySelector('video');

btnCont.addEventListener('click', function(e){
    slide.classList.toggle('slide')
    if(slide.classList.contains('slide')){
        video.pause();
    }
    else{
        video.play();
    }
})