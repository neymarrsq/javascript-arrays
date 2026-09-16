const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["112324345", "2321324314"], 
};

cliente.endereços = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    }
];

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (chavesDoObjeto.includes("endereco")) {
    console.error("Erro. é necessario ter um endereço cadastrado");
}