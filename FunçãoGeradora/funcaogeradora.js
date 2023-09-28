function* minhaFuncaoGeradora() {
yield 1;
    yield 2;
    yield 3;
  }
  
  const gerador = minhaFuncaoGeradora();
  
  console.log(gerador.next());
  console.log(gerador.next()); 
  console.log(gerador.next()); 
  console.log(gerador.next());

function* perguntas() {
    const nome = yield 'Qual é o seu nome?'
    const esporte = yield 'Qual é o seu esporte favorito?'
    return "Seu nome é " + nome + " seu esporte favorito é " + esporte
}

const teste = perguntas()

console.log(teste.next().value);
console.log(teste.next('Samuel').value);
console.log(teste.next('Natação').value);
