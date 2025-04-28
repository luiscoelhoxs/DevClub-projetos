const button = document.querySelector("button") //MAPEEI O BUTTON 
const select = document.querySelector(".select-moeda") // MAPEEI O SELECT PRA QUANDO FOR UTILIZADO
function converterValor() {
    const valueInput = document.querySelector("input").value //VALOR NO MEU INPUT
    const dolarToday = 5.69 //INSERI O PREÇO DO DOLAR 
    const euroToday = 6.92 // INSERI O PREÇO DO EURO
    const libraToday = 7.56 // INSERI O PREÇO DA LIBRA
    const bitToday = 540000 //INSERI O PREÇO DO BITCOIN
    const newValueDOL = valueInput / dolarToday //RESULTADO DE CONVERSÃO DE DOLAR
    const newValueEUR = valueInput / euroToday // RESULTADO DE CONVERSÃO EURO
    const newValueLIB = valueInput / libraToday
    const newValueBTC = valueInput / bitToday
    const valueReal = document.querySelector(".valor-moedaReal") // O QUE APARECE NA SECTION
    const valueNovo = document.querySelector(".valor-moedaNova") // O QUE APARECE NA SECTION
    if (select.value == "dolar") { //QUANDO O SELECT SELECIONA VALUE DOLAR (COLOQUEI VALUE NO HTML)
        valueNovo.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(newValueDOL)
    }
    if (select.value == "euro") { //QUANDO O SELECT SELECIONA VALUE EURO (COLOQUEI VALUE NO HTML)
        valueNovo.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(newValueEUR)

    }
    if (select.value == "libra") {
        valueNovo.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(newValueLIB)
    }
    if (select.value == "bitcoin") {
        valueNovo.innerHTML = newValueBTC
    }
    valueReal.innerHTML = new Intl.NumberFormat("pt-BR", { // É PARA COLOCAR O MESMO VALOR DO INPUT NO valueReal(SECTION) EM FORMATO BRL
        style: "currency",
        currency: "BRL"
    }).format(valueInput)
}
function mudarMoeda() {
    const textoMoeda = document.getElementById("text")
    const imgMoeda = document.querySelector(".img-section")

    if (select.value == 'dolar') {
        textoMoeda.innerHTML = "Dólar americano"
        imgMoeda.src = "/assets/usa.png"
    }
    if (select.value == 'euro') {
        textoMoeda.innerHTML = "Euro"
        imgMoeda.src = "/assets/euro.png"
    }
    if (select.value == 'libra') {
        textoMoeda.innerHTML = "Libra Esterlina"
        imgMoeda.src = "/assets/libra 1.png"
    }
    if (select.value == "bitcoin") {
        textoMoeda.innerHTML = "Bitcoin"
        imgMoeda.src = "/assets/bitcoin 1.png"
    }
    converterValor()
}


button.addEventListener("click", converterValor) //EVENTO DE CLICAR NO BOTAO
select.addEventListener("change", mudarMoeda)