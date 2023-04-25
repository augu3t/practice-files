let overlay = document.querySelector('.overlay');
let toggle = document.querySelectorAll('.toggle');

toggle.forEach(function(button){
    button.addEventListener('click', function(e){
        overlay.classList.toggle('hide');
    })
})
