const objs = [{
    "nome": "Matheus",
    "esta_trabalhando": true,
    "detalhes_profissão": {
        "profissao": "Programador",
        "salario": 1000
    },
    "hobbies": [1, "usd", null]
}]

//converter objeto para json
const jsonData = JSON.stringify(objs) //enviando dado para API
console.log(jsonData  + " objeto para json")

// converter json para objeto
const objdata = JSON.parse(jsonData)

console.log(objdata + " json para objeto")

objdata.map((pessoa) => {
    console.log(pessoa.esta_trabalhando)
})