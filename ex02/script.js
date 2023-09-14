function contar() {

    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 ){
        res.innerHTML = 'Impossível Contar'
    } else {
        res.innerHTML = 'Contando: '
        i = Number(ini.value)
        f = Number(fim.value)
        p = Number(passo.value)
        if(p <= 0) {
            window.alert('Passo invalido! considerando PASSO = 1')
            p = 1
        }
        if(i <= f){
            //Contagem crescente
           for(var c = i; c <= f; c+=p){
            res.innerHTML += ` ${c} \u{1F449}` 
           }
        } else {
            //Contagem decrescente
            for(var c = i; c >= f; c-=p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}  

