//Função que envia os dados para o servidor JSON SERVER
//POST - CREATE
function enviarDados(event) {

    event.preventDefault()

    //Obter os valores do input
    let nome = document.getElementById('nome').value
    let sobrenome = document.getElementById('sobrenome').value
    let senha = document.getElementById('senha').value
    let telefone = document.getElementById('telefone').value
    let rua = document.getElementById('rua').value
    let cidade = document.getElementById('cidade').value
    let estado = document.getElementById('estado').value
    let cep = document.getElementById('cep').value
    let rg = document.getElementById('rg').value
    let cpf = document.getElementById('cpf').value
    let idade = document.getElementById('idade').value
    let curso = document.getElementById('curso').value
    let escola = document.getElementById('escola').value

    //Enviar os dados para o servidor utilizando o FETCH
    fetch('http://localhost:3000/pessoas', {
        method: 'POST', //Método HTTP utilizado POST
        headers: {
            'Content-Type': 'application/json' //Tipo de conteúdo enviado JSON
        },
        body: JSON.stringify({
            nome: nome,
            sobrenome: sobrenome,
            telefone: telefone,
            rua: rua,
            cidade: cidade,
            estado: estado,
            cep: cep,
            rg: rg,
            cpf: cpf,
            idade: idade,
            curso: curso,
            escola: escola,
            senha: senha
        }) //Dados a serem enviados para o JSON
    })
        .then(resposta => resposta.json())
        .then(dados => {
            console.log(dados)
            alert('Cadastro realizado com sucesso!')
        })
}

