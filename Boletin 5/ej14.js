window.addEventListener('load', () => {

    

    document.getElementById('boton').addEventListener('click', () => {
        let datos = getCookie()
        let cafes = document.getElementsByName('cafe')
        let usuario = document.getElementById('usuario').value
        let oferta = document.getElementById('oferta')
        let habitacion = document.getElementById('habitacion').value
        let coffe
        if (datos[0] == usuario) {
            coffe = obtenerCafe(cafes)
            oferta.innerHTML = `${datos[0]}, hay una oferta especial para su ${datos[1]} de mierda favorito!!!!!!`
            setCookie(datos[0], coffe)
        } else {
            coffe = obtenerCafe(cafes)
            oferta.innerHTML = `${usuario}, tu café de mierda se ha enviado a tu habitación ${habitacion} que no me interesa pa na!!!!!!`
            setCookie(usuario, coffe)
        }
    })

    function obtenerCafe(cafes) {
        // Recorrerá los radio butons en busca del café que emos marcado
        let tipo_cafe
        for (var cafe of cafes) {
            if (cafe.checked) {
                tipo_cafe = cafe.value
            }
        }
        return tipo_cafe
    }

    // Funcion que añade una cookie
    function setCookie(usuario, coffe) {
        document.cookie = usuario + "," + coffe;
    }

    // Función para obtener las cookies
    function getCookie() {
        let infoCookie = decodeURIComponent(document.cookie);
        let listaCookies = infoCookie.split(',');
        return listaCookies;
    }

})