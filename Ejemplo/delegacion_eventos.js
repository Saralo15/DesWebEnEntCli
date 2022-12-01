var d=document;

d.addEventListener("click",e=>{
    console.log("he hecho click");

    //delegar evento
    if(e.target.matches("#vermaszuheros")){
        console.log(d.querySelector("#pzuheros").hidden="false");
        d.querySelector("#vermaszuheros").hidden="true";
    }

    if(e.target.matches("#vermenoszuheros")){
        console.log(d.querySelector("#pzuheros").hidden="false");
        d.querySelector("#vermenoszuheros").hidden="false";
    }

    if(e.target.matches("#vermascabra")){
        console.log(d.querySelector("#pcabra").hidden="false");
        d.querySelector("#vermascabra").hidden="true";
    }

    if(e.target.matches("#vermenoscabra")){
        console.log(d.querySelector("#pcabra").hidden="false");
        d.querySelector("#vermenoscabra").hidden="false";
    }

    if(e.target.matches("#vermaslucena")){
        console.log(d.querySelector("#plucena").hidden="false");
        d.querySelector("#vermaslucena").hidden="true";
    }

    if(e.target.matches("#vermenoslucena")){
        console.log(d.querySelector("#plucena").hidden="false");
        d.querySelector("#vermenoslucena").hidden="false";
    }
})

d.addEventListener("mouseover",e=>{
    //al pasar raton por encima de imagen
    /*switch(e.target.id){
        case 'imagen${1}':
            console.log("Estoy en la imagen de zuheros");
            break;

        case 'imagen${2}':
            console.log("Estoy en la imagen de cabra");
            break;

        case 'imagen${3}':
            console.log("Estoy en la imagen de lucena");
            break;
    }*/

    //Agrandar la imagen cuando pases el raton por encima. Pilla todos los eventos
    e.target.style.width="400px";
    e.target.style.height="400px";
   
})

//Ver x e y del raton
d.addEventListener("mousemove",e=>{
   console.log(e.clientX,e.clientY);
   
})
