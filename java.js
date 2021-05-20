function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('src', 'foto')
    }if(fsex[0].checked){
        gereno = 'Homem'
        if(idade > 0 && idade < 10){
            //criança
            img.setAttribute('src','crianca-m.png')
        }else if(idade < 21){
            //jovem
            img.setAttribute('src','jovem-m.png')
        }else if(idade < 50){
            //adulto
            img.setAttribute('src','adulto.png')
        }else{
            //idoso
            img.setAttribute('src','idoso.png')
        }
    }else if(fsex[1].checked){
        gereno = 'Mulher'
        if(idade > 0 && idade < 10){
            //criança
            img.setAttribute('src','crianca-f.png')
        }else if(idade < 21){
            //jovem
            img.setAttribute('src','jovem-f.png')
        }else if(idade < 50){
            //adulta
            img.setAttribute('src','Adulta.png')
        }else{
            //idosa
            img.setAttribute('src','idosa.png')
        }
    }
    res.innerHTML = `Detectamos ${gereno} com ${idade} anos.`
    res.appendChild(img)
}
