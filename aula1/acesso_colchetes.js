const client = {
    nome : 'Andre',
    idade : 32,
    cpf: '112222333445',
    email : 'andre@dominio.com'
}

console.log(`O nome do cliente é ${client['nome']} e essa pessoa tem ${client['idade']} anos.` );

const chaves = ['nome', 'idade', 'cpf', 'email', 'altura'];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${client[chave]}`);

})