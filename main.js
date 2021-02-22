var acc = document.getElementsByClassName("accordion-button");
var accBtnOpen = document.getElementsByClassName("accordion-button-open");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("accordion-button-active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
};


let dropDownList = document.getElementById("drop-down-list");
let navBarToggler = document.getElementById("navigation-toggle");

navBarToggler.addEventListener("click", function (e) {
    dropDownList.classList.toggle("active");
    navBarToggler.classList.toggle("toggle");
    e.stopPropagation();
});

document.onclick = function (e) {
    if (e.target.id !== 'drop-down-list') {
        dropDownList.classList.remove("active");
        navBarToggler.classList.remove("toggle");
    }
};
