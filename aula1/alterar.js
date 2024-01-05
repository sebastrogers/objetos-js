const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
  };
  
  console.log(pessoa.nome);
  
  console.log(pessoa.telefone);
  
  pessoa.telefone = "11 2223333444";
  
  console.log(pessoa.telefone);
  
  pessoa.nome = "Luma Silva";
  
  console.log(pessoa);
//observe que pessoa foi declarado como uma constante e ainda assim foi possível manipular. Em javascript
//é possível fazer esse tipo de alteração, contudo não é possível fazer reatribuições.
  const novaPessoa = {
    nome: "Pedro",
  };
  
  pessoa = novaPessoa;