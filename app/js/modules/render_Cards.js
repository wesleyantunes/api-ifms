const apiData = document.querySelector('.api-data')

export default async function renderCards(cursosList){
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