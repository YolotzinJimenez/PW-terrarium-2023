//Haciendo que la planta 1 de mi documento sea arrastrable
dragElement(document.getElementById("plant1"));

//Implementando la funcion drag element
function dragElement( terrariumElement ){
    //Creando una variables que controlaran las posiciones
    //iniciales y finales
    let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0
    //Registrar un evento
    terrariumElement.onpointerdown = pointerDrag

    function pointerDrag( event ){
        //Previene todo comportamiento por defecto el evento en cuestion en mi documento
        event.preventDefault();
        console.log("+On pointer down");
    }
}