function mostrarValores(ladoCorto, ladoMedio, ladoLargo) {
    ladoCorto = parseInt(ladoCorto);
    ladoMedio = parseInt(ladoMedio);
    ladoLargo = parseInt(ladoLargo);
    // Es triangulo o no
    if ((ladoCorto + ladoMedio) > ladoLargo) {
        console.log("Si es un triangulo");
    } else {
        console.log("No es un triangulo");
    }

    // Es equilatero o no
    if (ladoCorto == ladoMedio && ladoLargo == ladoCorto && ladoMedio == ladoLargo) {
        console.log("Es un triangulo equilatero");
    } else {
        console.log("No es un triangulo equilatero");
        // Es isosceles o no
        if (ladoCorto == ladoMedio || ladoCorto == ladoLargo || ladoLargo == ladoMedio) {
            console.log("Es un triangulo isosceles");
        } else {
            console.log("No es un triangulo isosceles");
            // Es escaleno o no
            if (ladoCorto != ladoMedio && ladoLargo != ladoCorto && ladoMedio != ladoLargo) {
                console.log("Es un triangulo escaleno");
            } else {
                console.log("No es un triangulo escaleno");
            }
        }
    }


}