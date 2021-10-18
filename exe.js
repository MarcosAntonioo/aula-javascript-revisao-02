//questão 1
function carro(tipo){
    if(tipo == 'hatch'){
        return "Compra efetuada com sucesso"
    }else if(tipo == 'sedans' || tipo == 'caminhoete' || tipo == 'motocicleta'){
        return "Tem certeza que não prefere este modelo?"
    }else if(true){
        return "Não trabalhamos com este tipo de automóvel aqui"
    }
}

carro()

//questão 3
function numero(n){
    if(n >= 0){
        console.log("O número é positivo")
    }else{
        console.log("O número é negativo")
    }
}
console.log(numero(-3))
