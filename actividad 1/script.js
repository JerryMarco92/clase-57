async function obtenerUsuarios(){
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    let datos = await respuesta.json();

    for(let dato of datos){
        console.log(`${dato.name} - ${dato.email} - ${dato.address.city}`);
    }






    //console.log(datos[3].address.city);
}

obtenerUsuarios();