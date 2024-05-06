var form = document.getElementById('form-contatos')
var contato = []
var numero = []

var linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
})

function adicionaLinha() {
    let formNome = document.getElementById('contato')
    let formNumero = document.getElementById('numero')

    if (numero.includes(parseInt(formNumero.value)) && formNumero.value.length == 0 && formNumero.value.length >= 16) {
        alert(`O número ${formNumero.value} é inválido ou já foi inserido!`)
    } else {
        contato.push(formNome)
        numero.push(parseInt(formNumero.value))

        let linha = '<tr>'
        linha += `<th>${formNome.value}</th>`
        linha += `<th>${formNumero.value}</th>`
        linha += '</tr>'

        linhas += linha
    }

    formNome.value = ''
    formNumero.value = ''
}

function atualizaTabela() {
    let corpoTabela = document.querySelector('tbody')
    
    corpoTabela.innerHTML = linhas
    corpoTabela.style.color = 'darkgray'
}