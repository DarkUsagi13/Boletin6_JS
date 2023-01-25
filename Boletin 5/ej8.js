window.addEventListener("load", iniciar)
function iniciar() {
    let boton = document.getElementById('enviar');
    let form = document.getElementById("form");

    function formCompleto(form) {
        for (let i = 0; i < form.length - 1; i++) {
            if (!form[i].value) {
                return false
            }
        }
        return true
    }

    form.addEventListener('change', () => {
        if (formCompleto(form)) {
            boton.disabled = false
        } else {
            boton.disabled = true
        }
    })

}