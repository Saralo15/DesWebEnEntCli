
function ejercicio11(){
    var rnd = 0;
        var atts = 0;
        var mayor = 100;
        var menor = 0;
        var num = 0;
        juego();

    function juego() {
            // obtener número aleatorio
            rnd = Math.round(Math.random() * 100);
            
            
            while (atts<10 && num!=rnd)  {
                num = prompt(`Introduce un número entre ${menor} y ${mayor}`);
                atts++;
                if (num > rnd) {
                    alert ("Has fallado, el número es menor");
                    //camibo límite superior
                    mayor=num;
                    }
                if (num < rnd) {
                    alert ("Has fallado, el número es mayor");
                    // cambio límite inferior
                    menor=num;
                    }
            }while (atts<10 && num!=rnd);
            if (atts==10){
                alert ("Has perdido porque has llegado a 10 intentos");
                }
            else{
                alert (`Has ganado y has acertado en ${atts} intentos`);
                }
        }
    }