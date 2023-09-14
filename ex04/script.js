function adicionar() {
    var num = document.getElementById('txtn')
    var nums = document.getElementById('selnums')
   

    if (num.value.length == 0) {
        window.alert('Por favor digite um numero')
    } else {
        var n = []
        n.push(Number(num.value))
        var item = document.createElement('option')
        item.text = ` Você adicionou o número ${n}`
        nums.appendChild(item)
        return n
    }

}

function finalizar() {
    var num = document.getElementById('txtn')
    var nums = document.getElementById('selnums')
    var result = document.getElementById('resultado')

    if (num.value.length == 0) {
        window.alert('Por favor digite um numero')
    } else {
        var ad = adicionar()
        result.innerHTML = `você digitou ` + ad
    }

}