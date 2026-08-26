const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
};

console.log(`Meu nome é ${pessoa.nome} e trabalho com ${pessoa.profissao}.`)

pessoa.telefone = "44 999999999";

console.log(pessoa.telefone);

const novaPessoa = {
    nome: "Pedro",
}

pessoa = novaPessoa