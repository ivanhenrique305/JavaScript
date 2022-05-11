var num = [4, 6, 8, 9, 12]
num.push(1)

console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
var pos = num.indexOf(9)
if (pos == -1){
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor  está na posição ${pos}`)
}





/* num.length: é ´para ver quantas posições existem no colchete.
*/
/*`num[0]`mostra a primeira posição
num.sort() coloca as posições em ordem
num.push(1) adiciona um valor ao final das posições.

*/
