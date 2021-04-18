const apiData = document.querySelector('.api-data')
const spinner = document.querySelector('.spinner-grow')
const nivelFilter = document.querySelector('.nivel-filter')

spinner.style.display="none"
async function getCursos(){
    const url = "http://localhost:3000/cursos"
    spinner.style.display="block"
    const response = await axios.get(url)
    spinner.style.display="none"
    const cursosList = Array.from(response.data)
    cursosList.forEach(async function(cursos){
        
        apiData.innerHTML+=`
            <div class="card mb-3 border border-dark">
               <img class="card-img-top" src="${cursos.img}" alt="Card image cap">
                <section class="card-body">
                    <h5 class="card-title">${cursos.curso}</h5>
                    <p class="card-text">
                        Nivel de Ensino: ${cursos.nivel_de_ensino}
                    </p>
                    <p class="card-text">
                        Duração: ${cursos.duracao}
                    </p>
                    <p class="card-text">
                        Município: ${cursos.municipio}
                    </p>
                </section>
                
            </div>
        `
    })   
}

async function search(query){
    const url =  `http://localhost:3000/cursos?q=${query}`
   
    
    const response = await axios.get(url);
    const cursosList = Array.from(response.data)
    apiData.innerHTML=""
    cursosList.forEach(function(cursos){
        apiData.innerHTML+=` 
        <div class="card mb-3">
        <img class="card-img-top" src="${cursos.img}" alt="Card image cap">
         <section class="card-body">
             <h5 class="card-title">${cursos.curso}</h5>
             <p class="card-text">
                 Nivel de Ensino: ${cursos.nivel_de_ensino}
             </p>
             <p class="card-text">
                 Duração: ${cursos.duracao}
             </p>
             <p class="card-text">
                 Município: ${cursos.municipio}
             </p>
         </section>
         
     </div>
          `
    })
}
async function getNivelEnsino(){
    const url =`http://localhost:3000/nivel_de_ensino`
    const response = await axios.get(url)
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