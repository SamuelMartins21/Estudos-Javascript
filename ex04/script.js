var num = document.getElementById('txtn')
var lista = document.getElementById('selnums')
var result = document.getElementById('res')
var valores = []

function isNumero(n){
    if(Number(n) >=1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)

    } else{
        window.alert('[ERROR] Digite um numero valido ou que ainda não tenha sido adicionado')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores na lista')
    } else{
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0

        for(var pos in valores){
            if(valores[pos] > maior){
                soma += valores[pos]
                media = soma/tot
                maior = valores[pos]
            } else if (valores[pos] < menor){
                menor = valores[pos]
            }
        }

        result.innerHTML = ''
        result.innerHTML += `<p>A lista tem ${tot} valores<p/>`
        result.innerHTML += `<p>O maior numero é ${maior}<p/>`
        result.innerHTML += `<p>O menor numero é ${menor}<p/>`
        result.innerHTML += `<p>A soma de todos os valores é ${soma}<p/>`
        result.innerHTML += `<p>A média de todos os valores é ${media}<p/>`
        
    }
}