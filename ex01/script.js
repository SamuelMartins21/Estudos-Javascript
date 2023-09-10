function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 1    
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src = 'Fotos/manhã-300.jpg'
        document.body.style.background = '#F98B36'
    } else if(hora >= 12 && hora < 18){
        img.src = 'Fotos/tarde-300.jpg'
        document.body.style.background = '#221D3D'
    } else {
        img.src = 'Fotos/noite-300.jpg'
        document.body.style.background = '#132029'
    }
}