function verificar() {
    var date = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.Value.length == 0 || fano.value > ano) {  
      window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        window.alert('tudo ok')
        var fsex = document.getElementById('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
    
    }
    
}