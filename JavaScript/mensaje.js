import { showMessage } from "./JavaScript/showMessage.js";
const btncarrito=document.querySelector("#${producto.id}")
console.log(btncarrito)
document.getElementById("${producto.id}").addEventListener("click", function (event){
    event.preventDefault();
try {
    showMessage("Producto agregado al carrito","success")
} catch (error) {
    showMessage("No se pudo agregar la carrito ", "error")
}
});



