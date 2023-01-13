window.addEventListener('load', () => {
    let body = document.getElementsByTagName('body')[0];
    let enlace = document.createElement('button');
    let texto = document.createTextNode('Crear/Borrar tabla');
    enlace.appendChild(texto);
    body.appendChild(enlace);

    document.getElementsByTagName('button')[0].addEventListener('click', () => {
        if (!document.getElementsByTagName('table')[0]) {
            let contenedor = document.getElementsByTagName('body')[0];
            let tabla = document.createElement('table');
            for (let i = 1; i < 21; i++) {
                let fila = document.createElement('tr');
                for (let j = 1; j < 21; j++) {
                    let columna = document.createElement('td');
                    let texto = document.createTextNode(`F : ${i} C: ${j}`);
                    columna.appendChild(texto)
                    fila.appendChild(columna)
                }
                tabla.appendChild(fila)
            }
            contenedor.appendChild(tabla)
        } else {
            document.getElementsByTagName('table')[0].remove()
        }
    });
    console.log(document.getElementsByTagName('table'))

})