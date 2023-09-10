function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fAno.value == 0 || fAno.value > ano ){
        window.alert('[ERROR] Verifique os dados e tente novamente')
    } else {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fSex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'Fotos/criança-homem.jpg')
            } else if( idade < 18){
                img.setAttribute('src','Fotos/homem-jovem.jpg' )
            } else if( idade <60){
                img.setAttribute('src', 'Fotos/homem-velho.jpg' )
            } else {
                img.setAttribute('src', 'Fotos/homem-velho.jpg')
            }
        } else if (fSex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'Fotos/criança-mulher.jpg')
            } else if( idade < 18){
                img.setAttribute('src','Fotos/jovem-mulher.jpg' )
            } else if( idade <60){
                img.setAttribute('src', 'Fotos/mulher-adulta.jpg' )
            } else {
                img.setAttribute('src','Fotos/mulher-velha.jpg' )
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}