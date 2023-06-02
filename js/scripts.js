function hideResults() {
    document.getElementById("liberal").setAttribute("class", "hidden");
    document.getElementById("conservative").setAttribute("class", "hidden");
    document.getElementById("moderate").setAttribute("class", "hidden");
    document.getElementById("asshole").setAttribute("class", "hidden");
};

window.onload = function () {
    document.querySelector("form").onsubmit = function (event) {
        event.preventDefault();
        hideResults();
        const q1 = document.querySelector("input#q1").checked;
        const q2 = document.querySelector("input#q2").checked;
        const q3 = document.querySelector("input#q3").checked;

        if (q1 && q2 && q3) {
            document.getElementById("liberal").removeAttribute("class");
        } else if ((q1 && q2) || (q2 && q3) || (q1 && q3)) {
            document.getElementById("moderate").removeAttribute("class");
        } else if (q1 || q2 || q3) {
            document.getElementById("conservative").removeAttribute("class");
        } else {
            document.getElementById("asshole").removeAttribute("class");
        };
    };
};