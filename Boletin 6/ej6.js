window.addEventListener('load', ()=>{
    let contenedor = document.getElementsByTagName('div')[0];
    let enlace = document.createElement('a');
    let texto = document.createTextNode('Mi enlace');
    enlace.appendChild(texto);
    enlace.setAttribute('href', '#');
    enlace.setAttribute('target', '_self');
    contenedor.appendChild(enlace);
    let div = document.createElement('div')

    let valores = document.getElementsByTagName('a')[0];
    //console.log(valores.attributes)
    for (let i = 0; i < valores.attributes.length; i++) {
        let p = document.createElement('p')
        let attr = document.createTextNode(`${valores.getAttribute[i]} = ${valores.attributes[i].value}`);      
        p.appendChild(attr)
        div.appendChild(p)
    }
    contenedor.appendChild(div)
})