//sacar descuento sin función
/* const precioOriginal = 100;
const descuento = 15; */

const porcentajePrecioConDescuento = 100 - descuento * precioOriginal / 100;

const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

console.log (precioConDescuento);

//sacar descuento con función

function calcularPrecioConDescuento (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    const result = document.getElementById("priceResult");
    result.innerText = `¡El precio con descuento del producto es de: ${precioConDescuento} pesos!`;
}

//agregándolo a HTML

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);
}

//cupones de descuento

function calcularPrecioConCupon (precio, cupon) {
    const porcentajePrecioConDescuento = 100 - cupon;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    const result = document.getElementById("cuponResult");
    result.innerText = `¡El precio con descuento del producto es de: ${precioConDescuento} pesos!`;
}

function onClickCupon () {
    const inputPrice = document.getElementById("cuponPrice");
    const priceValue = inputPrice.value;
    const Cupon = document.getElementById("cupons");
    const cupons = Cupon.value;

    const precioConDescuento = calcularPrecioConCupon(priceValue,cupons);
}
