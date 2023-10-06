function aluno(nome, nota){
   this.nome = nome // é como se fosse uma variavel declarada para a função aluno que recebe o valor do parâmetro "nome"
   this.nota = nota

   console.log(nome)
   console.log(nota)

   this.dados_arrow=function(){
    setTimeout(()=>{ // <= Arrowfunction nessa linha utiliza os dados do Pai(function aluno()) 
        console.log(this.nome)
        console.log(this.nota)
    }, 4000) //a função setTimeout() gera um atraso na execução
   }
}

const al1 = new aluno("roberto", 200)
al1.dados_arrow()
