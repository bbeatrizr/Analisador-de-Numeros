var num = document.getElementById('n1')
var list = document.getElementById('tab')
var res = document.getElementById('res')
//é o vetor que vamos usar para analisar os dados
var valores = []

//lugar onde o usuario vai digitar o numero 
function isnumber (n){
    // se o numero que o usuario digitar for maior ou igual a 1 &&(e) for menor ou igual a 100 retorne verdadeiro se não, falso
    if (Number(n) >= 1 && Number(n) <= 100){
        return true 
    }else {
        return false
    }
}
// vai passar o valor e a lista
// vai receber um numero e a lista como parametros 
function inlist (n, l){
    // se na lista a posição do vetor for diferente de -1 (valor que não foi encontrado na lista) então retorne verdadeiro 
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function adicionar (){
    //se o numero for um numero e não estiver na lista (valores)
    if (isnumber(num.value) && !inlist(num.value,valores)){
        //então valores.push(adiciona um valor no vetor)
        valores.push(Number(num.value))
        //criação da variavel item que vai ser a criação de um elemento de forma dinamica chamado (option)
        var item = document.createElement('option')
        //a variavel item vai ter o valor 'text' que vai ser uma string e vai mostrar no valor que foi adicionado 
        item.text = `Valor ${num.value} adicionado`
        //e para adicionar na lista ultilizamos a variavél list e o comando 'appendChild' e adicionamos a variavél item
        list.appendChild(item)
        res.innerHTML= ''

    }else{
        window.alert("Valor invalido ou já encontrado na lista!")
    }
    //limpar a tela de digitar o numero
    num.value = ''
    //já deixar o click para apenas digitar o numero 
    num.focus()
}
function fim(){
    //se o tamanho de valores for igual a 0.. window.alert
    if (valores.length==0){
        window.alert("Adicione valores antes de finalizar!")
    }else{
        //se não
        //criação da variavel tot(total)
        //tot atribui o 'tamanho de valores'
        var tot = valores.length
        //criação da variavel 'maior' que atribui valores na posição 0
        var maior = valores[0]
        //criação da variavél 'menor' que atribui valores na posição 0
        var menor = valores[0]
        //crição da variavél soma que atribui o valor 0
        var soma = 0
        //criação da variavél media que atribui o valor 0
        var media = 0

        //para cada posição em 'valores' vou morstar valores[pos]
        for (var pos in valores){
            //
            soma += valores[pos]
            // se valores na posição 'pos' for maior que a variavel maior (que está valendo 0 por enquanto)
            if (valores[pos] > maior){
                //então maior atribui valores[pos]
                maior = valores[pos]
            }else if (valores[pos] < menor){ // se não se valores na posição 'pos' for menor que a variavél menor..
            //então menor atribui valores[pos]
                menor = valores[pos]
            }
        }
        //tendo a soma e o total de valores digitados 
        //então a variavel 'media' atribui a soma e divide os valores
        media = soma / tot
        //limpa tela
        res.innerHTML = ""
        //resposta final
        res.innerHTML += `<p> Ao todo temos <strong>${tot}</strong> valores cadastrados. </p>`
        res.innerHTML += `<p> O maior valor informado foi <strong>${maior}</strong>. </p> `
        res.innerHTML += `<p> O menor valor informado foi <strong>${menor}</strong>. </p>`
        res.innerHTML += `<p> Somando todos os valores, temos <strong>${soma}</strong>. </p>`
        res.innerHTML += `<p> A media de todos os valores digitados é <strong>${media}</strong>. </p>`
    }
}