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
//La función excuseGenerator retorna una frase formada por tres strings aleatorias, una de cada array dado. Generamos los índices aleatorios ulizado las funciones Math.floor() y Math.random()
const excuseGenerator = () => {
    let personName = cleanArray(names)[Math.floor(Math.random()*cleanArray(names).length)];
    let personSurname = cleanArray(surnames)[Math.floor(Math.random()*cleanArray(surnames).length)];
    let excuse = cleanArray(excuses)[Math.floor(Math.random()*cleanArray(excuses).length)];
    return `${excuse} ${personName} ${personSurname}`;
}
console.log(excuseGenerator()); //console.log() para testar la función

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
                continue;
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