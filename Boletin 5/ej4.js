window.addEventListener('load', () => {
    let form = document.getElementById("form");
    let r1 = document.getElementById("r1");
    let r2 = document.getElementById("r2");

    document.getElementById("enviar").addEventListener("click", () => {
        for (let i = 0; i < form.length; i++) {
            if (form[i].name == "pregunta1" && form[i].checked) {
                if (form[i].value == "tigre") {
                    r1.innerHTML = "Respuesta correcta"
                } else {
                    r1.innerHTML = "Respuesta incorrecta"
                }
            }
            if (form[i].name == "pregunta2" && form[i].checked) {
                if (form[i].value == "orca") {
                    r2.innerHTML = "Respuesta correcta"
                } else {
                    r2.innerHTML = "Respuesta incorrecta"
                }
            }
        }
    })
});