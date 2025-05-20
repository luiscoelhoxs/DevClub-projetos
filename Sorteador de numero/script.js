
function generateNumber() {
    const button = document.querySelector("button")
    const min = Math.ceil(document.querySelector(".input-left").value)
    const max = Math.floor(document.querySelector(".input-right").value)
    const resultado = Math.floor(Math.random() * (max - min + 1)) + min;

    if (min >= max) {
        alert ("O valor digitado no primeiro espaço deve ser MENOR do que o valor digitado no segundo espaço.")
    } else {
        alert(resultado)
    }
}
