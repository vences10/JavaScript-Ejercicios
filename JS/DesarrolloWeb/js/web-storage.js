//WebStorage

function cambiarTema(){
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

cambiarTema();




/*objeto para guardar o recuperar datos
//localStorage.setItem("calve", "valor");

 localStorage.setItem("nombre", "Alma");
//sessionStorage.setItem("nombre", "Alma");

//getItem - Recupera un dato dentro del localStorage (devuelve un String)
// console.log(localStorage.getItem("nombre"));

if(localStorage.getItem("nombre")=== "Alma"){
        console.log("Adivinaste!");
}else{
    console.log("el nombre real es " + localStorage.getItem("nombre"));
}

localStorage.removeItem("nombre");
//Evalua si el elemento ya existe en localStorage
if(localStorage.getItem("nombre")!= null){
 //setItem -CRear un dato nuevo dentro del localStorage
    localStorage.setItem("nommbre","Fernando");
    //getItem -Recupera un dato dentro del localStorage (devuelve un String)
    console.log(localStorage.getItem("nombre"));
}else{
    //localStorage.removeItem("nombre");
    //localStorage.clear(); - elimita todoslos elementos
    localStorage.setItem("nombre","alberto");
}

*/