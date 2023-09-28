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