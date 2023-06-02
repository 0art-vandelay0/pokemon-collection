function hideResults() {
    document.getElementById("pokeMaster").setAttribute("class", "hidden");
    document.getElementById("pokeNovice").setAttribute("class", "hidden");
    document.getElementById("pokeIntermediate").setAttribute("class", "hidden");
    document.getElementById("pokeNewbie").setAttribute("class", "hidden");
};

window.onload = function () {
    document.querySelector("form").onsubmit = function (event) {
        event.preventDefault();
        hideResults();
        const q1 = document.querySelector("input#q1").checked;
        const q2 = document.querySelector("input#q2").checked;
        const q3 = document.querySelector("input#q3").checked;

        if (q1 && q2 && q3) {
            document.getElementById("pokeMaster").removeAttribute("class");
        } else if ((q1 && q2) || (q2 && q3) || (q1 && q3)) {
            document.getElementById("pokeIntermediate").removeAttribute("class");
        } else if (q1 || q2 || q3) {
            document.getElementById("pokeNovice").removeAttribute("class");
        } else {
            document.getElementById("pokeNewbie").removeAttribute("class");
        };
    };
};