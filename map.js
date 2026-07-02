const notas = [10, 9.6, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => {
    return  nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(notasAtualizadas);