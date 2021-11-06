/* 
1 - crear una funcion que genere una escusa aleatoria con esos datos
2 - crear otra funcion que cuente el numero de repeticiones de letras en cada array
3 - suprimir repeticiones en un array y devolver el array sin la repeticion
4 - function que invierta todos los valores de el array

----NORMAS----
- documentado
- prohibido la programacion declarativa
- debe estar separado en funciones
- no se pueden utilizar objetos
- obligatorio programacion funcional
- todas las variables y nombres en funciOnes en ingles
- escritura camel-case
*/

let surnames = ["10", "juan", "@12", "null", "antonioPerezDelCarmen", "abcdefghtioiasoisdjads", "Manolo", "Perez", "Soledad"];
let excuses = ["OMG?", "What’s going on?", "How much is it?", "18", null, 'undefined', function(){}];
let names = ["Jeferson", "Matilda", "R@fael", "1van", "Pep3", "Loquesea", "Fel1berto", "Pepit@", "D@M"];

// Función cleanExcuses elimina de un array dado todo valor que no sea un string
const cleanArray = (array) => {
    let validArray = [];
    for (let i in array) {
        if (typeof array[i] == "string") {
            validArray.push(array[i]);
        }
    }
    return validArray;
}

/* EJERCÍCIO 1 */
//La función randomNumber retorna números aleatorios que representan los índices de los valores de un array dado
function randomNumber(array) {
    let cleanedArray = cleanArray(array);
    return Math.floor(Math.random() * cleanedArray.length);
}

//La función excuseGenerator llama a la funcion randomNumber para devolver valores aleatorios dentro de cada array y retorna un string aleario con esos valores
const excuseGenerator = () => {
    let randomSurname = surnames[randomNumber(surnames)];
    let randomExcuse = excuses[randomNumber(excuses)];
    let randomName = names[randomNumber(names)];
    return `${randomExcuse} ${randomName} ${randomSurname}`;
}
console.log(excuseGenerator()); //console.log() para testar la función excuseGenerator

/* EJERCÍCIO 2 */
//La función countLetters retorna un objeto donde aparecen todos los caracteres presentes en los elementos de un array dado e indica cuantas veces esa letra aparece en el array
const countLetters = (array) => {
    let counter={};
    let cleanedArray = cleanArray(array); //La función cleanArray es llamada para eliminar valores que no sean un string
    for(let i in cleanedArray){
        let item = cleanedArray[i];
        for(let j in item){
            let letter = item[j].toLowerCase(); //Las letras son convertidas en minúsculas para que se cuenten el número de ocurrencias sin diferenciarse mayúsculas y minúsculas
            if (letter == " ") { //Los espacios son eliminados para que la función no los cuente
                letter = "";
            }
            else if(counter[letter]){
                counter[letter] = counter[letter]+1;
            }
            else {
                counter[letter]=1;
            }
        }
    }
    return counter;
}
console.log(countLetters(excuses)) //console.log() para testar la función


/* EJERCÍCIO 3 */
//La función noRepeat elimina las repeticiones en un array dado. 
const noRepeat = (array) => {
    let cleanedArray = cleanArray(array); //La función cleanArray es llamada para eliminar valores que no sean un string
    let set = new Set(cleanedArray); //El array es convertido en un set, que a diferencia de los array no almacena valores repetidos
    let arrayWithoutRepetitions = [... set]; //Es creado un nuevo array donde se incluyen todos los valores presentes en el set
    return arrayWithoutRepetitions;
}
console.log(noRepeat(excuses)); //console.log() para testar la función


/* EJERCÍCIO 4 */
//La función arrayReverse invierte el orden de los caracteres en cada string de un array dado
const arrayReverser = (array) => {
	let reversedArray = [];
	let cleanedArray = cleanArray(array); //La función cleanArray es llamada para eliminar valores que no sean un string
	for (let i in cleanedArray){
		let reversedStr = "";
		let str = cleanedArray[i];
		for (let j = str.length-1; j >= 0; j--){ //Cada string dentro del array es recorrido en el orden inverso
			reversedStr += str[j]; //Los string invertidos son incluidos en un nuevo array
		}
		reversedArray.push(reversedStr);
	}
	return reversedArray;	
}
console.log(arrayReverser(excuses)) //console.log() para testar la función