import getData from "./modules/connection_api.js";
import renderCards from "./modules/render_Cards.js";

const spinner = document.querySelector('.spinner-grow')
const nivelFilter = document.querySelector('.nivel-filter')

showSpinner(false)

function showSpinner(isShow=false){

    if(isShow){
        spinner.style.display="block"
        return
    }else{
        spinner.style.display="none"
        return
    }

}

async function getCursos(){
    
    showSpinner(true)
    const response = await getData('cursos')
    showSpinner(false)
    const cursosList = Array.from(response.data)
    const render = await renderCards(cursosList)
    render;
}

async function search(query){
    
    showSpinner(true)
    const response = await getData(`cursos?q=${query}`)
    showSpinner(false)
    const cursosList = Array.from(response.data)
    const render = await renderCards(cursosList)
    render;
}

async function getNivelEnsino(){
    
    showSpinner(true)
    const response = await getData(`nivel_de_ensino`)
    showSpinner(false)
    const nivelList = Array.from(response.data)
    nivelList.forEach(function(nivel_de_ensino){
        nivelFilter.innerHTML+=`<option value="${nivel_de_ensino.nivel_de_ensino}">${nivel_de_ensino.nivel_de_ensino}</option>`
    })
 

}

const btnBuscar = document.querySelector('.btn-buscar')
const inputSearch = document.querySelector('input[type=search]')
btnBuscar.addEventListener('click',function(){
    search(inputSearch.value)
})

nivelFilter.addEventListener('change',function(){
    search(nivelFilter.value)
})
getCursos()
getNivelEnsino()