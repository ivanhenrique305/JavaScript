function contar() {
let ini = document.getElementById('txti')
let fim = document.getElementById('txtf')
let passo = document.getElementById('txtp')

if (ini.ariaValueMax.length == 0 . fim.ariaValueMax.length == 0 . passo.ariaValueMax.length == 0){
    res.innerHTML = 'Impossivel contar!'
    window.alert('[ERRO] Faltam dados')

} else {
    res.innerHTML = 'Contando: '
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0) {
        window.alert('Passo invalido! Considerando PASSO 1')
        p = 1
    }
    if (i < f) {
        for(let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    } else {  
    for(let c = i; c <= f; c <= p) {
        res.innerHTML += ` ${c} \u{1F449}`
        res.innerHTML += `\u{1FC1}`
    
    }

}
res.innerHTML += `\u{1F3C1}`
    
}


}