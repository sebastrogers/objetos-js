const client = {
    nome : 'Andre',
    idade : 32,
    cpf: '112222333445',
    email : 'andre@dominio.com'
}

console.log(`O nome do cliente é ${client.nome} e essa pessoa tem ${client.idade} anos.` );

console.log(`Os três primeiros digitos do CPF são ${client.cpf.substring(0,3)}`);