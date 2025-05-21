let input = document.querySelector('input')
let text = document.querySelector('p')
let button = document.querySelector('button')

const logins = [
    { User: 'lucoe', Senha: 'Headlu07' },
    { User: 'matinho', Senha: 'lucas123' },
    { User: 'leandrovski', Senha: 'flavia123' },
    { User: 'coutz', Senha: 'safado6969' },
]

function buscar() {
    let i = 0;
    let encontrado = false
    do {
        if (input.value.toLowerCase() === logins[i].User.toLowerCase()) {
            text.innerHTML = `Login encontrado: ${logins[i].User}, ${logins[i].Senha}`;
            encontrado = true
            break;
        }
        i++;
    } while (i < logins.length)
        if( !encontrado){
            text.innerHTML = 'Login não cadastrado';
        }
    }
