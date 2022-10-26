export const GuardarEnStorage = (clave, elemento) => {

    // conseguir los elementos que ya tenemos
    let elementos = JSON.parse(localStorage.getItem(clave));

    // comprobar si es un array
    if(Array.isArray(elementos)){
        // agregar dentro del array un elemento nuevo
        elementos.push(elemento);
    } else {
        // crear un array con el nuevo elemento
        elementos = [elemento];
    }

    // guardar en el local storage 
    localStorage.setItem(clave, JSON.stringify(elementos));

    // devolver objeto
    return elemento;
}