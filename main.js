const numeros = [1, 2, 3, 4 ,5] 

numeros.push(6) //add no final da array
//numeros.shift() //remove o primeiro da array

const numerosDobrados = numeros.map((numero) => numero * 2) //multiplica todos os numeros por 2

const AcimaDeTres = numeros.filter((numero) => numero > 3) //pega todos os numeros acima de 3

const segundoAoQuarto = numeros.slice(1,4) //pega os numeros dentro dessas indices

console.log(numeros)

numeros.splice(1,1,7) //substitui o numero da indice 1 por 7
console.log(numeros)

const numerosSomado = numeros.reduce((total,numero) => total + numero, 0); //soma os numeros e guarda em 'total'
console.log(numerosSomado)

numeros.sort((numero1, numero2) => numero1 - numero2); //coloca os numeros na ordem crescente
console.log(numeros)

const primeiroPar = numeros.find(numero => numero % 2 === 0); //pega o primeiro numero par

console.log(primeiroPar)

const palavras = ["Ola", "eu", "sou", "Jessica"]

const frase = palavras.join(" "); //junta toda a array e coloca ' ' entre as palavras

console.log(frase)

const palavrasCapsLock = palavras.map(palavra =>  { //transforma as palavras com menos de 6 letras em letras maiusculas
    if (palavra.length < 6) {
        return palavra.toLocaleUpperCase();
    }else {
        return palavra;
    }
});

console.log(palavrasCapsLock)

const media = numeros.reduce((soma, numero) => soma + numero, 0) / numeros.length; //calcula a media, 0 eh o valor inicial de 'soma'

console.log(media)

const indiceNumero4 = numeros.indexOf(4);
console.log("O indice do numero 4 eh : ", indiceNumero4)

function numerosAoQuadrado(array) {  //array = numeros, vai pegar cada indice e multiplicar por ele mesmo
    return array.map(numero => numero * numero)
}

const ResultadoNumeroAoQuadrado = numerosAoQuadrado(numeros) //nome da array dentro da funcao

console.log(ResultadoNumeroAoQuadrado)