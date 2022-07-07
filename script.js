//quando não declaro o tipo de método usando o fetch() ele entende que é o GET (traz informações)
const response = fetch("https://jsonplaceholder.typicode.com/users/")
// Promise que trata o sucesso é o método then()
// o parâmetro res recebe o retorno da função anterior
.then(res => {
    console.log(res.json())
})
//promise que trata o erro é o método catch()
.catch(error => {
    console.log(`Deu erro na busca: ${error}`)
})