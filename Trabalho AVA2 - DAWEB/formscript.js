function imgExp(){
    console.log(window.innerWidth);
    setTimeout(function(){  
        if(window.innerWidth > 500)
        {
            let visita = document.querySelector('main article')
            let img = document.querySelector("main article img")
            console.log(img);
            img.style.height = visita.clientHeight + "px"
            // console.log(visita.clientHeight);
        }
    }, 1000)
}

window.addEventListener('resize', imgExp())
window.addEventListener('onload', imgExp())