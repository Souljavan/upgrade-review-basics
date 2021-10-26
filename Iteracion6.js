let arra=['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function swap(arr,param1,param2){
  posicionparam1=arr.indexOf(param1);
  posicionparam2=arr.indexOf(param2);
  arr[posicionparam1]=param2;
  arr[posicionparam2]=param1;
   
  return(arr)

}

//console.log(swap(arra,'Cristiano Romualdo','Ronalguiño')) //["Mesirve", "Ronalguiño", "Fernando Muralla", "Cristiano Romualdo"]

console.log(swap(arra,'Fernando Muralla','Mesirve')) //["Fernando Muralla", "Cristiano Romualdo", "Mesirve", "Ronalguiño"]