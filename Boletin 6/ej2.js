window.addEventListener('load', ()=>{
    para = document.createElement('p');
    txt1 = document.createTextNode('Este es el ');
    para.appendChild(txt1)
    enfasis = document.createElement('em');
    txt2 = document.createTextNode('contenido');
    enfasis.appendChild(txt2);
    para.appendChild(enfasis);
    text3 = document.createTextNode(' de mi parrafo');
    para.appendChild(text3);
    document.getElementById('testdiv').appendChild(para);
})