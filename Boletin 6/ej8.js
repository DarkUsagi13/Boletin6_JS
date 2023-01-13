window.addEventListener('load', () => {
    let body = document.getElementsByTagName('body')['0'];
    let div = document.createElement('div');
    div.setAttribute('class', 'todos-los-viajes');
    let h1 = document.createElement('h1');
    let texto = document.createTextNode('Subtitulo')
    h1.appendChild(texto);
    div.appendChild(h1);
    body.appendChild(div);
    let lista = document.createElement('ul');
    body.appendChild(lista);

    let json = [
        {src:"/img/img1.jpg", desc:"descripcion1", specs:["spec11", "spec12",]},
        {src:"/img/img2.jpg", desc:"descripcion2", specs:["spec21", "spec22",]}
    ]

    for (let i of json) {
        let li = document.createElement('li');
        let img = document.createElement('img');
        img.setAttribute('src', i.src);
        let p = document.createElement('p');
        p.appendChild(document.createTextNode(i.desc));
        li.appendChild(img);
        lista.appendChild(li);
        li.appendChild(p);
        let lista2 = document.createElement('ul');
        li.appendChild(lista2)

        for (let j of json) {
            if (i.desc === j.desc) {
                let li2 = document.createElement('li');
                lista2.appendChild(document.createTextNode(j.specs));
            }
        }
        lista.appendChild(li);
    }
    

});