var valores = [8, 1, 7, 9, 10, 14]
valores.sort()
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

/* for(var pos=0;pos < valores.length; pos++){
console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
num.indexOf(7) procura apenas o valor que você exige!
}
*/

for(var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

