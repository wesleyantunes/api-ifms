const inputCep = document.querySelector('input[name=cep]')
const inputLogradouro = document.querySelector('input[name=logradouro]')
const inputComplemento = document.querySelector('input[name=complemento]')
const inputBairro = document.querySelector('input[name=bairro]')

inputCep.addEventListener('focusout',function(){
    let consulta =  consultarCep(inputCep.value)
    consulta.then(function(response){
    inputLogradouro.value= response.data.logradouro
    inputComplemento.value = response.data.complemento
    inputBairro.value = response.data.bairro
})

})

async function consultarCep(cep){
  const url = `http://viacep.com.br/ws/${cep}/json/`
  let response = await axios.get(url)
  return response;
}



