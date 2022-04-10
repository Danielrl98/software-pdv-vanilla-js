//Dom

const datalist = document.querySelector("#datalist")
const option = document.querySelector("option")
const inputproduto = document.querySelector("#inputproduto")
const tbody = document.querySelector("#tbody")
const total = document.querySelector("#valortotal")
const inputsubmit = document.querySelector("#inputsubmit")
const tbodyvendas = document.querySelector(".tbodyvendas")
const select = document.querySelector("#formadepagamento")
const CadastrarProduto = document.querySelector(".gridcadastro")
const inputnomeproduto = document.querySelector("#inputnomeproduto")
const inputvalorproduto = document.querySelector("#inputvalorproduto")
const inputestoqueproduto = document.querySelector("#inputestoqueproduto")
const buttonProduto = document.querySelector("#buttonProduto")
//log

const log = (value) => console.log(value)




//armazenamentos dos produtos


const array = []


buttonProduto.addEventListener('click',(e)=>{
   
//Produtos

    const Produtos = {}
    Produtos.nome=inputnomeproduto.value
    Produtos.valor=inputvalorproduto.value
    Produtos.estoque=inputestoqueproduto.value

array.push(Produtos)

log(array)

inputnomeproduto.value = ''
inputvalorproduto.value =''
inputestoqueproduto.value = ''

DataList()
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

function DataList(){

var mapearnome = array.map(data=>data.nome)
var mapearestoque = array.map(data=>data.estoque)
var mapearvalor = array.map(data=>data.valor)

    
var criaroption = document.createElement("option")
    for(i in mapearnome,mapearvalor,mapearestoque){
        
        
        datalist.append(criaroption)
        criaroption.value = mapearnome[i]

    }
    addEventListener('submit',(e)=>{
        
        e.preventDefault()
        var pesquisarprodutoexistente = array.find(data=> data.nome === inputproduto.value)

        
        

        if(!pesquisarprodutoexistente){

           console.log("este produto não existe")
           inputsubmit.style.backgroundColor="red"
        
           inputproduto.addEventListener('click',()=>{
            inputsubmit.style.backgroundColor="rgb(255, 145, 0)"
            
        })
        }else{
       
        
        console.log(pesquisarprodutoexistente)
        
        var criarList = document.createElement("tr")

        tbody.append(criarList)

        criarList.innerHTML = `<td class="tddeletar"><button onClick="removerItem(tbody)"class="deletar">X</button></td>`+`<td>${pesquisarprodutoexistente.nome}</td>` + `<td class="listestoque">${pesquisarprodutoexistente.estoque}</td>` +`<td>${pesquisarprodutoexistente.valor}</td>`
        
        //total.innerHTML = somar
        juntarValor(pesquisarprodutoexistente.valor)
        inputproduto.value = ''
       }
    
    })
}


//deletar itens
function removerItem(value){

    value.innerHTML = ''
    valorarray = []
    total.innerHTML = "0,00"
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
  
    var somavalor = valorarray.reduce((accumulator,valor)=>accumulator+valor,0)
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

           CadastrarProduto.style.display="grid"
            booleancadastro = false

        } else{
            CadastrarProduto.style.display="none"
            booleancadastro = true
        }
        
}





