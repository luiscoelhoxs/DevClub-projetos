let milissegundos = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;
let cron;
let h2 = document.querySelector('h2');
function iniciar() {
    cron = setInterval(() => {
        milissegundos += 1;
        if (milissegundos === 100) {
            milissegundos = 0;
            segundos += 1;
        }
        if (segundos === 60) {
            segundos = 0;
            minutos += 1;
        }
        if (minutos === 60) {
            minutos = 0;
            horas += 1;
        }
        
        h2.innerHTML =
            horas + ":" +
            minutos + ":" +
            segundos + ":" +
            milissegundos;

    }, 10);
}
function pausar() {
    clearInterval(cron)
}
function resetar(){
    pausar();
    milissegundos = 0
    segundos = 0
    minutos = 0
    horas = 0
    h2.innerHTML = "0:0:0:0"
}