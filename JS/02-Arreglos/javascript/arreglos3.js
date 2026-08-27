const paises =["Mexico", "Nigeria", "Vietnam", "Colombia"];
const inverso = [];
//for(inicio; condicion; incrmento/decremento)
//la longitud es de 4 ya que con 4 elementos
//las posiciones del arreglo son 0,1,2,3
for(let i=0; i < paises.length; i++){
console.log(paises[i]);
}

paises.forEach((pais)=> console.log(pais));

for(let i=10; i >= 0; i--){
    inverso.push(i);
    console.log(inverso);
}
