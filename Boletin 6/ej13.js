window.addEventListener('load', () => {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    div1.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("text", event.target.id);
    });

    div2.addEventListener("dragover", function (event) {
        event.preventDefault();
    });

    div2.addEventListener("drop", function (event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(data));
    });
});