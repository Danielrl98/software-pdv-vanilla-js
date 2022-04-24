//Dom
async function importarVariares(url){

        await import(url)

}

importarVariares('./variaveis.js')
//eventos
addEventListener('submit',e=>e.preventDefault())

//variaveis
const select = document.querySelector("#formadepagamento")
//log

const log = (value) => console.log(value)

//armazenamentos dos produtos

const Produtos = {}

const array = []



var storageProduto = [localStorage.getItem('produtos')]
var novoStorage = storageProduto.map(Array)
console.log(novoStorage)

buttonProduto.addEventListener('click',(e)=>{
   
//Produtos

    Produtos.id= Math.floor(Math.random() * 1000)
    Produtos.nome=inputnomeproduto.value
    Produtos.valor= parseInt(inputvalorproduto.value)
    Produtos.estoque=inputestoqueproduto.value

 array.push(Produtos)
 localStorage.setItem('produtos',JSON.stringify(array))


log(array)

inputnomeproduto.addEventListener('click',()=>{
    mensagemproduto.style.display="none"
})

if(inputnomeproduto.value !== '' && inputvalorproduto.value !== '' && inputestoqueproduto.value !== ''){

    mensagemproduto.style.display="block"

    DataList()

}else{

    alert("preencha os campos")
}


inputnomeproduto.value = ''
inputvalorproduto.value =''
inputestoqueproduto.value = ''


})

//listar produtos

var mapearnome2 = array.map(data=>data.nome)
var mapearestoque2 = array.map(data=>data.estoque)
var mapearvalor2 = array.map(data=>data.valor)

//somar valor
var valorarray = []

function juntarValor(value){

        valorarray.push(value) 
        var somavalor = valorarray.reduce((accumulator,valor)=>accumulator+valor,0)
      
        total.innerHTML = somavalor
}
var arrayProdutosAdicionados = []

function DataList(){

var mapearnome = array.map(data=>data.nome)
var mapearvalor = array.map(data=>data.valor)
var mapearestoque = array.map(data=>data.estoque)



    
var criaroption = document.createElement("option")
    for(i in mapearnome,mapearvalor,mapearestoque){
        
        
        datalist.append(criaroption)
        criaroption.value = mapearnome[i]

    }
    inputsubmit.addEventListener('click',()=>{
        
        var pesquisarprodutoexistente = array.find(data=> data.nome === inputproduto.value)
       

        
        if(!pesquisarprodutoexistente){

           console.log("este produto não existe")
           inputsubmit.style.backgroundColor="red"
        
           inputproduto.addEventListener('click',()=>{
            inputsubmit.style.backgroundColor="rgb(255, 145, 0)"})
            return
        }
       
        var numberRandom = "tratual"//Math.floor(Math.random() * 1000)
       
        var saveID = pesquisarprodutoexistente.nome
        var criarList = document.createElement("tr")
        criarList.classList.add(`${numberRandom}`)
        tbody.append(criarList)
        
       
        const saveItem = `<td "class="tddeletar"><button onClick="removerItem()"class="deletar">X</button></td>`+`<td>${pesquisarprodutoexistente.nome}</td>` + `<td class="listestoque">${pesquisarprodutoexistente.estoque}</td>` +`<td>${pesquisarprodutoexistente.valor}</td>`

        arrayProdutosAdicionados.
        push({pnome: "pesquisarprodutoexistente.nome",pvalor:"pesquisarprodutoexistente.valor"}) 

        criarList.innerHTML = saveItem 
        
        //total.innerHTML = somar
        juntarValor(pesquisarprodutoexistente.valor)
        inputproduto.value = ''

       
       
    })
}


//deletar itens


function removerItem(value){

const tratual = document.querySelector(".tratual")
tratual.parentNode.removeChild(tratual)

   // valorarray = []
   // total.innerHTML = "0,00"
 } 
//lista de vendas
var c = 1
var todasasvendas = {}
var arraytodasvendas = []

function criarMovimento(){
    
   
    Object.defineProperties(todasasvendas,{
        _id:{
            value:c
            
        },
        _tipodevenda:{
            value: "vendadireta"
        },
        _valordavenda:{
            configurable:true,
            writable:true,
            enumerable:true
        },
        _formadepagamento:{
            value:select.value
        },
        data:{
            value:new Date()
        },
        valordavenda:{
            get:function(){
                return this._valordavenda
            },
            set: function(value){
                this._valordavenda = value
            }
            
        },
        formadepagamento:{
            get:function(){
                return this._formadepagamento
            },
            set: function(value){
                this._formadepagamento = value
            }
            
        }

    })

}
//vendas
function gerarMovimento(){
    c++
    console.log(arrayProdutosAdicionados)
    var somavalor = valorarray.reduce((accumulator,valor)=>accumulator+valor,0)
    log(somavalor)
    total.innerHTML = somavalor

    var tabelavendas = `<tr><td>${c}</td>` + '<td>venda direta</td>' + `<td>${todasasvendas.formadepagamento=select.value}</td>`+ `<td> ${todasasvendas.valordavenda=somavalor}</td>` + `<td>${todasasvendas.data}</td></tr>`

    if(somavalor >= 0.01){

        removerItem(tbody)
      
        var vendasbody = document.createElement("tr")
        tbodyvendas.append(vendasbody)

        arraytodasvendas.push(tabelavendas)

        tbodyvendas.innerHTML = arraytodasvendas.map(data=>data)
       
      
       if(alert){
        inputsubmit.style.backgroundColor="rgb(255, 145, 0)"
    }

     }else{
        alert("Impossível finalizar com o valor de R$ " + somavalor +',00')
  
    }
    
}
criarMovimento()

var booleancadastro = true
function BtnCadastrarProduto(){

        if(booleancadastro === true){

           CadastrarProduto.style.visibility="visible"
            booleancadastro = false

        } else{
            CadastrarProduto.style.visibility="hidden"
            booleancadastro = true
        }
        
}
var booleanvendas = true
function verVendas(){
    
    if(booleanvendas  === true){

        gridvendas.style.display="grid"
         booleanvendas  = false

     } else{
        gridvendas.style.display="none"
         booleanvendas = true
     }
}




