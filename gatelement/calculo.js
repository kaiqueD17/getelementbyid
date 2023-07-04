let titulo = document.getElementById('title')
titulo.innerHTML = "clique para saber o imc"

function imc(peso,altura){
    let resultado=document.getElementById('resultado')
    resultado.innerHtnml  (peso/ (altura*altura))
}