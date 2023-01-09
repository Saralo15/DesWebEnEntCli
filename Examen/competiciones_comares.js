/*function competicionDeportiva(){
    let competicion = document.querySelector('tipoCompeticion');
    if(competicion.value('futbol') || competicion.value('baloncesto')){

    }
}*/

let select = document.getElementById('competicion');

  select.addEventListener('change',
  function opcionCompeticion(){
    var selectedOption = this.options[select.selectedIndex];
    if(selectedOption == '1' || selectedOption == '2'){
        let p = document.getElementById('competicion');
        let newElement1 = document.createElement('p');
        newElement1.textContent = 'Equipo Local: ';

        let text1 = document.createElement('input');
        text1.setAttribute('type', 'text');

        let newElement2 = document.createElement('p');
        newElement2.textContent = 'Equipo Visitante: ';

        let text2 = document.createElement('input');
        text2.setAttribute('type', 'text');
    }
  });

  //deshabilitar botones
  function deshabilitarBotones(){
    let enviar = $('#Enviar1'). val();

      if(enviar){
        const btnEnviar = document.getElementById('Enviar1');
        btnEnviar.disabled = true; 

        const btnLimpiar = document.getElementById('Reset1');
        btnLimpiar.disabled = true; 
      }
  }


