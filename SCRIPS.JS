var listaDeFrutas = [ "Uva", "Banana",  "Manga", "Cajá", "Pinha"]
var busca = "Cajá"

for(let i=0; i < listaDeFrutas.length; i++){
    if ( busca == listaDeFrutas[i]){
        console.log("Sim, temos a fruta banana disponível")
        break
    }
    
     
}

var cartela = [8, 13, 18, 22, 42, 49]
var numeroSorteado = 42


for(var i; i< cartela.length; i++){
    if(cartela[i] == numeroSorteado){
        console.log("Encontrei o número!")
        break
    }
}


var listaDeNomes = ['Cesar', 'Pamela', 'Camila', 'Hendy']
var buscar = 'Cesar' //Nome que iremos buscar

for(var i =0; i < listaDeNomes.length; i++){
    if(listaDeNomes[i] == buscar){
    console.log('Encontrei o nome')
    break
    }
}





var cartela = [8, 13, 18, 22, 42 , 49]
var numeroSorteado = 42

for(var i =0; i < cartela.length; i++){
    if (cartela[i] == numeroSorteado){
    console.log("Encontrei o número!")
    break
    }
    
     
}

for (var numero  = 0; numero  < 21; numero ++){
    if(numero % 2 == 1 ){
        continue  
    }
    console.log(i)
}


var familia = ["Joana", "Felipe", "Gabriela", "Carlos", "Pedro", "Bruno"]


for(var i =0; i < familia.length; i++){
    if (familia[i] == "Pedro"){
    console.log("Pedro Souza")
    continue
    }
    console.log(familia[i] + " Macedo")
     
}


function tabuadaDoSete() {
    for (var i = 1; i<=10; i++) {
    console.log("7 x "+i+ " = " + i)
    }
}

tabuadaDoSete()


function tabuadaDoSete() {
    for (var i = 1; i<=10; i++) {
    
    }
    console.log([i].length)
}

tabuadaDoSete()


function menorNumero( a=10, b=10){
    if(a < b){
        return a;
    }else{
        return b;
    }
}
menorNumero()


function autonomia(quantidadeDeCombustivel, rendimento){
    rendimento = 20;
    quantidadeDeCombustivel=5;
     
    autonomia = quantidadeDeCombustivel * rendimento
    return autonomia
}

autonomia()


function calculaValorDevido(pesoDaRoupaSuja) {
 …
}