const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1143243435"],
};

cliente.enderecos = [
    {
        rua: "R. Joseph CLimber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
];

cliente.enderecos.push({
    rua: "R. Joseph Climber",
    numero: 404,
    apartamento: false,
});

const listaApenasApartamentos = cliente.enderecos.filter(
    (enderecos) => enderecos.apartamento === true
);

console.log(listaApenasApartamentos);