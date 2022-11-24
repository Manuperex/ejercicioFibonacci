let primer_numero = parseInt(prompt("Ingresa un primer numero"));
let segundo_numero = parseInt(prompt("Ingresa un  segundo numero"));
let array = [primer_numero, segundo_numero];


for (i = 0; i <= 100; i++){

    let nuevo_numero = primer_numero + segundo_numero;
    array.push(nuevo_numero);
    primer_numero = segundo_numero;
    segundo_numero = nuevo_numero;
}
console.log(array);