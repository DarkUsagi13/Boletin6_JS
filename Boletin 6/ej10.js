window.addEventListener('load', () => {
    caja = document.getElementById('caja')
    
    caja.addEventListener('mousemove', () => {
        let x = event.clientX;
        let y = event.clientY
        xy = document.createTextNode(`${x}:${y}`)
        caja.innerHTML = "";
        caja.appendChild(xy)
    })
})