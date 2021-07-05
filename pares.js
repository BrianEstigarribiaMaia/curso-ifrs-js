var inicio = 2;
var fim = 20;
var pares = "Numeros pares ";

while(inicio <= fim){
	pares += inicio + ", ";
	inicio += 2;
}

document.write(pares +"<br>");