let menu = document.getElementById('menu');
    let closed = document.getElementById('close');
    let sidebar = document.querySelector('.sidebar');
    let body = document.querySelector('body')

    menu.addEventListener('click', function(e){
        toggler()
    })

    closed.addEventListener('click', function(e){
        toggler()
    })

    function toggler(){
        let sideStyles = sidebar.classList;
        if(sideStyles.contains('hide')){
            sidebar.style = "width: 25rem; top: 0%; left: 0%;"
            sidebar.classList.remove('hide')
            body.style = "background: rgb(196, 192, 192);"
        }
        else{
            sidebar.style = "width: 25rem; top: 0%; left: -100%;"
            sidebar.classList.add('hide')
            body.style = "background: rgb(230, 230, 235);"
        }
    }