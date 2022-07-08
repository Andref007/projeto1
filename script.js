//quando não declaro o tipo de método usando o fetch() ele entende que é o GET (traz informações)
const response = fetch("https://jsonplaceholder.typicode.com/users/")
// Promise que trata o sucesso é o método then()
// o parâmetro res recebe o retorno da função anterior
.then(response => {
    console.log(response)
    return response.json()
})

//Usamos para interar (percorrer o array),  o método map() que é um método para percorrer todo o array como um for
.then(data => {
    data.map(user => {
        console.log(`Nome: ${user.name}`)
    })
})
//promise que trata o erro é o método catch()
.catch(error => {
    console.log(`Deu erro na busca: ${error}`)
})


//método map() só funciona com listas



// site utilizado jsonplaceholder