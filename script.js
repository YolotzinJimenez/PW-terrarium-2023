//tomando control del objeto
let plant1 = document.getElementById("plant1")

//
plant1.addEventListener("click", ()=>{
    let name = prompt("Hola, ¿Cuál es tu nombre?");
    if(name !==""){
       alert(`${name} please, Save the Plant🌱🌱!!!`);
    }
}); 