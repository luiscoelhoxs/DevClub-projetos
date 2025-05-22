let usuario = document.getElementById('usuario')
let senha = document.getElementById('senha')
let text = document.querySelector('p')
let button = document.querySelector('button')

const logins = [
    { User: 'pessoa', Senha: 'linkedin' },
    { User: 'fulano', Senha: 'Fulano123' },
    { User: 'Ciclano', Senha: 'Ciclano123' },
    { User: 'Beltrano', Senha: 'Beltrano123' },
]
function login() {
    let encontrouUsuario = false;
    for (let i = 0; i < logins.length; i++) {

        if (usuario.value.toLowerCase() === logins[i].User.toLowerCase()) {
            encontrouUsuario = true;
            
            if (senha.value === logins[i].Senha) {
                text.innerHTML = `Bem vindo, ${logins[i].User}!`;
            } else {
                text.innerHTML = 'Senha incorreta, tente novamente.';
            } break;
        }
        if (!encontrouUsuario){
            text.innerHTML = 'Usuário não cadastrado, tente novamente.'
        }
        
    }
}