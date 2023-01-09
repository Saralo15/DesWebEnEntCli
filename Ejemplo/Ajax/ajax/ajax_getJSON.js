$(function(){ 

$("#dni").blur(function (e) { 
    e.preventDefault();
    var datodni=new Object();
    datodni.dni= $("#dni").val();
    dato_str_dni=JSON.stringify(datodni);
    $.getJSON( "ajax_getJSON.php", JSON.parse(dato_str_dni),
                            function (respuestaJson){
                            $("#nombre").val(respuestaJson.nombre);
                            $("#apellidos").val(respuestaJson.apellidos);
                            $("#domicilio").val(respuestaJson.domicilio);
                            $("#email").val(respuestaJson.email);
                            $("#telefono").val(respuestaJson.telefono);
                            }
            ).done(function(respuestaJson){
                if (respuestaJson.alta){
                    $("#altamodif").val("Alta");
                    }else{
                        $("#altamodif").val("Actualizar");
                        }
            })
            /*function(d,textStatus,error){
                console.error("getJSON failed, status: " + textStatus + ", error: "+error)
                }*/
    })
        
})





