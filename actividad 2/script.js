async function obtenerUsuarios(){
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    let datos = await respuesta.json();
    let lista = document.getElementById("lista");
    
    
    for(let dato of datos){
        let usuario = document.createElement("li");
        lista.appendChild(usuario);
        usuario.textContent = `${dato.name} - ${dato.email}`;
    }

}

obtenerUsuarios();