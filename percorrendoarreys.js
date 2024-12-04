// Definindo o array
//let frutas = ["Maçã", "Banana", "Laranja", "melancia", "uva"]

// Imprimindo manualmente, mas acessando os elementos do array
//console.log(`Elemento no índice 0: ${frutas[0]}`)
//console.log(`Elemento no índice 1: ${frutas[1]}`)
//console.log(`Elemento no índice 2: ${frutas[2]}`)
//console.log(`Elemento no índice 3: ${frutas[3]}`)
//console.log(`Elemento no índice 4: ${frutas[4]}`)
//
//for (let i = 0; i <= 6; i++) {  //3 parametros: inicio/condição/incremento
//    console.log(`Número: ${i}`)
//  }




// Usando o loop for para percorrer o array:

//o contador 'i' começa no valor 0 e vai até frutas.length -1 (ultimo elemento do array)
//or (let i = 0; i < frutas.length; i++) { 
//onsole.log(`Elemento no índice ${i}: ${frutas[i]}`)
//}


// Procurando por uma fruta específica
//let frutas = ["Maçã", "Banana", "Laranja", "Manga"]
//let frutaProcurada = "Laranja"
//
//for (let i = 0; i < frutas.length; i++) {
//  console.log(`Verificando: ${frutas[i]}`)
//
//  if (frutas[i] === frutaProcurada) {
//    console.log(`Fruta encontrada: ${frutas[i]}`);
//    break; // Interrompe o loop ao encontrar a fruta
//  }
//}


//et numeros = [1, 2, 3, 4, 5, 6, 7, 8];
//et soma = 0;
//
//or (let i = 0; i < numeros.length; i++) {
// soma += numeros[i]; // Adiciona o número atual à variável 'soma'
//
//onsole.log("A soma dos números é:", soma);


//let valores = [2, 4, 6, 8];
//for (let i = 0; i < valores.length; i++) {
//  valores[i] *= 2; // Multiplica cada valor por 2
//}
//console.log("Array modificado:", valores);


//Fprçando loop infinito com uma condição que numca vai mudar
//for (let i = 0; 1 === 1; i++) { 
//console.log(`${i}`)
//}


let numeros = [10, 20, 30]

// Definindo uma função que será usada pelo forEach
function exibirNumero(numero) {
  console.log(`O número é: ${numero}`)
}



numeros.forEach(exibirNumero)