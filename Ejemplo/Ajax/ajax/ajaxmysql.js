    $(function(){ 
        $("#mostrar").click(function (e) { 
        var respuesta=new XMLHttpRequest;
        //var resultado2=document.getElementById("info");
        respuesta.onreadystatechange =function(){
        if (this.readyState=== 4 && this.status ===200){
                //resultado2.innerHTML=this.responseText;
                //document.getElementById("info").innerHTML=this.responseText;
                //$("#info").innerHTML=this.responseText;
                $("#info").html(this.responseText);
            }
        }
        respuesta.open("GET","ajaxmysql.php",true);
        respuesta.send();
        e.preventDefault();
        });  
    });

