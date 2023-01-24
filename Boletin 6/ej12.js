window.addEventListener('load', () => {
    let div = document.getElementById("div");

    document.addEventListener("mousemove", (event) => {
        div.style.left = event.clientX + "px";
        div.style.top = event.clientY + "px";
    });

})