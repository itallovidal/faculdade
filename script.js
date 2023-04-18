function checagemTamanho(){
    let largura = window.innerWidth

    if(largura > 501)
    {
        return true
    }
    else
    {
        return false
    }
}

window.onload = function(){
    let desktop = document.querySelector("#nav-principal nav")
    let mobile = document.querySelector(".mobile-container")
    
    if(checagemTamanho() == true){
        mobile.classList.add("desativado")
        resizeFotos(true)
    }

    else{
        desktop.classList.add("desativado")
        resizeFotos(false)
    }
}

window.onresize = function(){
    let desktop = document.querySelector("#nav-principal nav")
    let mobile = document.querySelector(".mobile-container")    
    let fotos = document.querySelectorAll('#container-trabalhos img')

    if(checagemTamanho() == true){
        if(desktop.classList.contains("desativado") == true)
        {
            desktop.classList.toggle("desativado")
            mobile.classList.toggle("desativado")
        }
        else if(mobile.classList.contains("desativado") != true){
            mobile.classList.toggle("desativado")

        }
    }

    else{
        if( mobile.classList.contains("desativado") == true)
        {
            mobile.classList.toggle("desativado")
            desktop.classList.toggle("desativado")
        }
    }

    if(fotos.length != 0 ){
        if(checagemTamanho() == true){
            resizeFotos(true)
        }
        else
        {
            resizeFotos(false)
        }
    }

}

function expNav(){
    let navbar = document.getElementsByTagName("nav")[0]
    navbar.classList.toggle("desativado")
}

// --------------------------------------


function mudafoto(mostrar){
    let fotoAtiva = document.querySelector("#container-fotos img:not(.desativado)")
    let fotos = document.querySelectorAll("#container-fotos img")
    console.log(fotos);
    
    fotoAtiva.classList.add("desativando")
    
    setTimeout(function(){
        fotoAtiva.classList.remove("desativando")
        fotoAtiva.classList.add("desativado")

        fotos[mostrar].classList.remove("desativado")
    }, 505)
}

function resizeFotos(valor){

    let fotos = document.querySelectorAll('#container-trabalhos img')

    if(fotos.length != 0 ){
        console.log("pag. index");
        // console.log(fotos);

        if(valor == true)
        {
            console.log("versão desktop")
            fotos.forEach( i => {
                i.classList.remove("desativado")
            });
        }
    
        else{
            console.log("versão mobile")
    
            for (let i = 1; i < fotos.length; i++) {
                const element = fotos[i]
                console.log(element)
                element.classList.add("desativado")
            }
        }
    }
}














