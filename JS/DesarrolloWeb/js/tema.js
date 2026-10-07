export function cambiarTema(){
     const temaBtn =document.getElementById("temaBtn");
    const html = document.querySelector("html");//decuelve el primer elemento del documento
    let temaActual;
    //let tema = html.getAttribute("data-bs-theme");

    if(localStorage.getItem("tema") != null){//REvisar si el elemento "tema" ya existe dentro de localStorge
        temaActual =localStorage.getItem("tema"); //DEvuelve light/dark
        html.setAttribute("data-bs-theme",temaActual);//Se Renderiza el color según localStorage

    }else{//Si No EXISTE
        localStorage.setItem("tema", "light");//Lo crea, valor inicial light
        temaActual = localStorage.getItem("tema");//Actualiza temaActual con localStorage
        html.setAttribute("data-bs-theme",temaActual);//Renderiza en html según del temaActual
    }//else


    
temaBtn.addEventListener("click", ()=> {
    if(temaActual === "light"){// Lee el valor de data-bs-theme en HTML
            html.setAttribute("data-bs-theme","dark");//Si es light, lo cambia a dark
            temaActual = html.getAttribute("data-bs-theme");//Actualiza el valor de temaActual
            localStorage.setItem("tema", temaActual);
        }else{
            html.setAttribute("data-bs-theme", "light");//Si No es light, lo define así
            temaActual = html.getAttribute("data-bs-theme");//Actualiza el valor de temaActual
            localStorage.setItem("tema", temaActual);
        }//else

    });

}//cambia Tema

