window.addEventListener('load', () => {
    let form = document.getElementById('form')
    let datos = document.getElementById('datos')
    let info
    form.addEventListener('submit', (e) => {

        let dia = document.getElementById('dia').value
        let mes = document.getElementById('meses').value
        let anio = document.getElementById('anio').value
        let fecha = new Date(`${dia}/${mes}/${anio}`)
        let hoy = new Date()
        edad = hoy - fecha
        let anios = Math.floor(edad / (1000 * 60 * 60 * 24 * 365))
        console.log(anios)

        document.getElementById('edad').value = anios

        for (let i = 0; i < form.length; i++) {
            if (form[i].value != 'Enviar') {
                let valores = document.createElement('p');
                info = document.createTextNode(form[i].value)
                valores.appendChild(info)
                datos.appendChild(valores)
            }
        }

        let ventana = window.open("", "", width = 200, height = 300)
        let body = ventana.document.getElementsByTagName('body')[0]
        body.appendChild(datos)

    })

})