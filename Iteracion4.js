const arr=['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex(array, text) {
if (array.indexOf(text)!=-1){
    return("Se ha encontrado. La posicion es: "+array.indexOf(text))
} else{
    return("El texto no se ha encontrado. ")
}

}

console.log(findArrayIndex(arr,'Salamandra')) // posicion 2
console.log(findArrayIndex(arr,'Mosquito')) // posicion 1
console.log(findArrayIndex(arr,'Mito')) // No encontrado. 
