let input = document.querySelector('input')
let text = document.querySelector('p')
let button = document.querySelector('button')

const logins = [
    { User: 'lucoe', Senha: 'Headlu07' },
    { User: 'matinho', Senha: 'lucas123' },
    { User: 'leandrovski', Senha: 'flavia123'},
    { User: 'coutz', Senha: 'safado6969' },
]

function buscar() {
    for (let i = 0; i < logins.length; i++) {

        if (input.value.toLowerCase() === logins[i].User.toLowerCase()) {
            text.innerHTML = `Login encontrado: ${logins[i].User}, ${logins[i].Senha}`;
            break;
        } else {
            text.innerHTML = 'Login não cadastrado';
        }
    }
}