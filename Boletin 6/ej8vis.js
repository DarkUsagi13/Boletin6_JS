window.addEventListener('load', () => {
    let div = document.getElementsByTagName('body')[0].appendChild(document.createElement('div'))
    div.setAttribute('class', 'todos-los-viajes');
    let h1 = document.createElement('h1')
    h1.appendChild(document.createTextNode('Subtituloo'))
    div.appendChild(h1)
    let ul1 = document.createElement('ul')
    div.appendChild(ul1)
    let json = [
        { src: "https://picsum.photos/id/237/400/200", desc: "descripcion1", specs: ["spec11", "spec12",] },
        { src: "https://picsum.photos/id/237/400/200", desc: "descripcion2", specs: ["spec21", "spec22",] }
    ]

    for (let i of json) {
        let li = document.createElement('li')
        let img = document.createElement('img')
        img.src = i.src
        li.appendChild(img)
        ul1.appendChild(li)
        let p = document.createElement('p')
        p.appendChild(document.createTextNode(i.desc))
        li.appendChild(p)
        let ul2 = document.createElement('ul')

        for (const j of i.specs) {
            let li2 = document.createElement('li')
            li2.appendChild(document.createTextNode(j))
            ul2.appendChild(li2)
        }

        li.appendChild(ul2)

    }

})