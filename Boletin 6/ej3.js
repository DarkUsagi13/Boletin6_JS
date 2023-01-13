window.addEventListener('load', ()=>{
    listado = document.getElementsByTagName('ul')[0];
    listado.style.listStyleType = 'square';
    
    nuevoElemento1 = document.createElement('li');
    nuevoModelo1 = document.createTextNode('Mazda RX-5');
    nuevoElemento1.appendChild(nuevoModelo1);
    listado.insertBefore(nuevoElemento1, listado.firstChild);
    nuevoElemento2 = document.createElement('li');
    nuevoModelo2 = document.createTextNode('Toyoya Supra');
    nuevoElemento2.appendChild(nuevoModelo2);
    listado.insertBefore(nuevoElemento2, listado.children[4]);
    nuevoElemento3 = document.createElement('li');
    nuevoModelo3 = document.createTextNode('Nissan Skyline');
    nuevoElemento3.appendChild(nuevoModelo3);
    listado.appendChild(nuevoElemento3)
});