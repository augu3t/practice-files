let btns = document.querySelectorAll('.bi');
let answers = document.querySelectorAll('.answer')

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        let card = e.target.parentElement.parentElement.parentElement;
        let answer = card.childNodes[3];

        answer.classList.toggle('hide');
        btn.classList.toggle('open');

        answers.forEach(function(ans){
            if(ans !== answer){
                ans.classList.add('hide')
            }
        })

        btns.forEach(function(button){
            butt = button.classList;
            if(button !== btn){
                butt.remove('open')
            }

            if(button.classList.contains('open')){
                butt.add('bi-dash-lg');
                butt.remove('bi-plus-lg');
            }
            else{
                butt.remove('bi-dash-lg');
                butt.add('bi-plus-lg');
            }
        })    
    })
})
