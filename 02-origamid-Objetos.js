// Objeto Literal
const menu = {
    selector: ".principal",
    active() {
        const menuElement = document.querySelector(this.selector);
        menuElement.classList.add("active");
        console.log(menuElement)
    }
};

menu.active()

menu.selector; // ".principal";
menu.active(); // adicionar active ao menu
menu.hasOwnProperty("class"); // método herdado

["10", "20", "30"].map(Number); // [10, 20, 30];
"JavaScript".toUpperCase(); // JAVASCRIPT

const body = document.querySelector("body");
body.classList.add("js"); // adiciona JS ao Body
