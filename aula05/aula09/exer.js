 
 /*var num = 8 
 console.log(num**=2) 
 */
/*var idade = 27;
console.log(idade);
var altura = 1.85;
console.log(altura);
*/
/* var nomeMaiusculo = */
/*
var nome = Ivan;
console.log(nome);
*/

/*var nome = ('ivan');
console.log(nome);
var idade = 27;
console.log(idade);
var altura = 1.85;
console.log(altura);
*/

/*const valorIngressoAdulto = 50;
(quando não prcisar mudar de valor usar o "const")
console.log(valorIngressoAdulto);
*/
/*
var nome = 'Ivan'; //string literal 
var idade = 27; //number literal (qualquer valor)
var estaAprovado = true; //valor boolean
var sobrenome = undefined ;  //Undefined
var corSelecionado = null ;//Redefinir um valor (exemplo para entrar em uma senha)
var habilidade = 'sobrevivência na selva';
var especial = 'os inimigos se perdem perante ao perigo'

var pessoa = {
      nome:'Jhon',
      idade: 27,
      estaAprovado: true,
      sobrenome : 'Rambo',
      habilidade: 'sobrevivência na selva',
      especial: 'os inimigos se perdem perante ao perigo'
  };
  console.log(pessoa);
  */

  //arrays é um conjunto de dados que pode ser acessado por um índice//

  //Arrays
/*
  var familia = [15,'Sub-zero','Scorpion',27,50,35];
  console.log(familia.length);//quantos numeros ou strings tem dentro
  console.log(familia[1]);// vai sempre contar a partir de zero nunca se esqueça
*/

//Verbo + Substantivo
/*
var corSite = "azul";
function resetaCor(cor,tonalidade){
corSite = cor + ' ' + tonalidade;

};
*/
/*console.log(corSite);
resetaCor("vermelho","claro");/*resetando outas cores introduzidas neste caso no SITE*/
//console.log(corSite);

//Realizar um tarefa, não desenvolve nada
/*function dizerNome(){
console.log('Ivan');
}

dizerNome();
//Faz um cálculo ou operação e retorna algo
function MultiplicadoPorDois(valor){
return valor* 2;
}

//console.log(MultiplicadoPorDois(5));

var resultado = MultiplicadoPorDois(5);
 console.log(resultado);*/


 //Operadores aritiméticos (matemáticos)
  /*let salario = 100;

  //+, -, *, /, **

  console.log(salario + salario);
  console.log(salario - salario);
  console.log(salario * salario);
  console.log(salario ** salario);
  console.log(salario / salario);*/

  // incremento e decremento ++, --
  /* let idade = 18;
   console.log(idade++);
   console.log(idade);

    let peso = 105;
    console.log(peso--);
    console.log(peso);*/

    //Operadores de atribuição

 /*   let valorTecladoGamer = 100;
    //valorTecladoGamer = valorTecladoGamer + valorTecladoGamer;
    //valorTecladoGamer = valorTecladoGamer - valorTecladoGamer;
    valorTecladoGamer += valorTecladoGamer;
    console.log(valorTecladoGamer);
*/

//Operadores de Igualdade acaba não somando string mais o number! mais usado!
//Igualdade estrita
/*console.log ( 1 === 1);
console,log( '1' === 1);
*/
//Igualdade solta Não recomendado usar esse!
/*console.log( 1 == 1);
console.log( '1' == 1);
*/

//Operador Ternário
// Tem um cliente, 100 premium, comum
/*let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);
// SE O CLIENTE TIVER MAIS PONTOS SERÁ PREMIUM OU SE FOR COMUM TERÁ APENAS 100
*/

//Operador Lógico e (&&)
// Retorna TRUE se os dois operandos forem true

//console.log(true && false);
//Operador Lógico ou (||)
//Retornar se um dos operandos forem TRUE

/*let maiorDeIdade = false;
let possuiCarteiraDeTrabalho =false;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

console.log('pode aplicar:' ,podeAplicar);


//Operador NOT (!)
let candidatoRecusado = !podeAplicar;
 

console.log('candidato recusado' ,candidatoRecusado);*/

//*Comparação lógica com valores não boleanos

// Falsy
// undefined
// null
// 0 
//false
//''
// NaN  - not a  number * Calculos matemáticos em valores não compatíveis
//Truthy * 
/*
let corPersonalizada = 'Vermelho';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);*/

//Atividade de troca de valores
/*
let a = 'vermelho';
let b = 'azul';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);
*/


// if...else

// Se a hora estiver entre as 06:00 até 12:00 : Bom dia!
// Se estiver entre 12:00 até 18:00 : Boa tarde!
//Caso contrário : Boa Noite!
/*let hora = 13;

if (hora > 6 && hora < 12) {
  console.log("Bom dia meu anjo!");
}
else if (hora > 12 && hora < 18) {
  console.log("Boa tarde meu anjo!");
}
else {
  console.log("Boa Noite meu anjo!");

}
*/

//switch... case 
/*let permissao;
permissao = 'gerente'; comum ; diretor
switch (permissao) {
  case'comum':
  console.log('usário comum');
  break;

  
    case'gerente':
    console.log('usário gerente');
    break;
    
    
      case'diretor':
      console.log('usário diretor');
      break;   
      
 default:
   console.log('Usuário não reconhecido!');

}*/


//lupens: for, while, do..while, for...in, for...of
/*
for(let i = 0;i < 5; i++) {
 // console.log('estou aprendendo!',i);
if(i % 2 !== 0){ para numeros impares
    console.log(i);
  
}
}
*/

//while loop
/*
let i = 5;

while (i >= 1) {
  if(i % 2 !== 0){
    console.log(i);
  }
  i--;
}*/

/*let i =0;
do {
  console.log('digitando',i);
  i++
}while (i < 10)*/

/*const pessoa = {
  nome: 'Ivan',
  idade: 27
};
//key-value chave e valor
/*for(let chave in pessoa){
  console.log(chave,pessoa['nome']);
}

const cores = ['vermelho', 'azul', 'verde'];

for (let indice in cores) {
  console.log(indice,cores[indice])
}*/


//for..of
/*const cores = ['vermelho amarelo marron'];

for(let cor of cores){
  console.log(cor);

  }
*/

/*
let valorMaior = max(100,80);
  console.log(valorMaior);

function max(numero1,numero2) {
  if(numero1 > numero2)
  return numero1;
  else return numero2;
}*/

//divisível por 3 => Fizz
//divisível por 5 => Buzz
//divisível por 3 e 5 =>FizzBuzz
//Não divisível por 3 ou 5 => entrada
//Não é um número => 'Não é um número'
/*const resultado = fizzBuzz(6);// qual numero ele é divisível?
console.log(resultado);

function fizzBuzz(entrada) {
  if ( typeof entrada !== 'number')
    return 'Não é um número';
  if (entrada % 3 == 0)
    return'Fizz'
  if (entrada % 5 === 0)
    return 'Buzz';
  if (entrada % 3 === 0 && entrada % 5 === 0)     
    return 'FizzBuzz';
  return entrada; 
}
*/

//Velocidade máxima de até 70
//a cada 5km acima do limite você ganha 1 ponto
//math.floor()
//caso pontos maior que 12 -> "carteira suspendida"

/*
verificarVelocidade (70);

function verificarVelocidade(velocidade) {
  if (velocidade <= 70)
    console.log('ok');
  else {
    const pontos = Math.floor(((velocidade - 70) / 5));
  if ( pontos >= 12)
    console.log('Carteira Suspensa');
  else
    console.log('Pontos',pontos);  
  
  }  
  
}*/
/*

exibirTipo(5);
function exibirTipo(limite) {
for (let i = 0; i<= limite; i++) {
  if (i % 2 === 0)
  console.log(i,'par');

  else
  console.log(i,'impar');
}
}
*/ 

/*
exibirTipo(15);
function exibirTipo(limite) {
  for (let i = 0; i<= limite; i++) {
    if (i % 2 === 0)
    console.log(i,'par');

    else
    console.log(i,'impar');

    
  }
}*/


//criar um método para ler propriedades de um objeto 
//exibir somente as propriedades do tipo string que estão nesse objeto

/*
const filme = {
  titulo : 'Vingadores',
  ano : 2018,
  diretor: 'robin',
  personagem : 'thor'
} 

exibirPropriedades(filme)
function exibirPropriedades(obj) {
  for (prop in obj)
    if(typeof obj[prop] === 'string')
      console.log(prop,obj[prop])

}*/

/*

const filme = {
  titulo : 'Rambo',
  ano : 2021,
  diretor : 'Captão Nascimento',
  personagem : 'Jhon'

}

exibirPropriedades(filme)
function exibirPropriedades(obj) {
  for (prop in obj)
    if (typeof obj[prop] === 'string')
    console.log(prop,obj[prop])
}*/