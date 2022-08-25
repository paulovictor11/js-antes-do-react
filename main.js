// * Nullish Coalescing Operator

const idade = 0;
document.body.innerText = "Sua idade é: " + (idade ?? "Não informado");

// * Objetos

const user = {
    nome: "Paulo Victor",
    idade: 25,
    address: {
        street: "Rua teste",
        number: 123,
    },
};

document.body.innerText = "name" in user; // ! verifica se uma propriedade existe dentro de um objeto
document.body.innerText = Object.keys(user); // ! retorna as chaves de um objeto
document.body.innerText = Object.values(user); // ! retorna os valores de uma objeto
document.body.innerText = Object.entries(user); // ! converte o objeto em um vetor de vetores

// * Desestruturação

// ! método simples
const endereco = user.address;

// ! método desestruturado
const { address } = user;

// ! renomeando
const { idade: age } = user;

// ! valores default (caso não exista no objeto)
const { nickname = "Tacash" } = user;

// ! também é possível usar em outros locais (ex: parametros de uma função)
function mostraIdade({ idade }) {
    return idade;
}

document.body.innerText = mostraIdade(user);

// * Rest Operator

const { name, ...rest } = user; // ! retorna todas as propriedades que não sejam name

// ! também é possível usar me arrays
const arrays = [1, 2, 3, 4, 5];
const [first] = arrays; // ! mesmo que const first = arrays[0]
const [primeiro, segundo, resto] = arrays;

// ! é possível pular posíções
const [one, , three] = arrays;

// * Short Sintax

const meuNome = "Paulo";
const minhaIdade = 25;

const usuario = {
    meuNome: meuNome,
    minhaIdade,
    minhaIdade,
};

// ! quando os nomes são iguas antes e depois do :
// ! é possível encurtar essa declaração

const novoUsuario = { meuNome, minhaIdade };

document.body.innerText = novoUsuario;

// * Optional Chaining

const newUser = {
    name: "Paulo Victor",
    age: 25,
    // address: {
    //     street: "Rua teste",
    //     number: 123,
    //     zip: {
    //         cod: '12123123',
    //         city: 'Jampa City'
    //     }
    // },
};

// ! exibindo uma propriedade que não existe no objeto
document.body.innerText = newUser.address.zip.code;

// ? como resolver: método simples
document.body.innerText = user.address
    ? user.address.zip
        ? user.address.zip.code
        : "Não informado"
    : "Não informado";

// ? como resolver: método avançado
// ! adicionando o ? em cada propriedade (que contém ?) que possa não existir no objeto
// ! sendo possível combinar com o Nullish Coalescing Operator
document.body.innerText = user.address?.zip?.code ?? "Não informado";

// ! também é possível verificar funções
document.body.innerText = user.address?.showFullAddress?.() ?? "Não informado";

// ! pesquisando por chave inexistente
const key = "state";
document.body.innerText = user.address?.[key];

// * Métodos de array

const array = [1, 2, 3, 4, 5];

// ! for
for (const i of array) {
    console.log(i);
}

// ! forEach
array.forEach((i) => console.log(i));

// ! map
// ! obs: o array manterá o mesmo tamanho do array original, apenas manipulando seus items
console.log(array.map((i) => i * 2));

// ! filter
// ! obs: irá retorna um novo array com os dados filtrados pela condição
console.log(array.filter((i) => i % 2 == 0));

// ! every
// ! retornará um booleano de acordo com a condição informada
// ! retornará true se TODOS os itens satisfazerem a condição
console.log(array.every((i) => typeof i === "number"));

// ! some
// ! obs: espera que pelo menos um item satisfaça a condição
array.push("Teste");
console.log(array.every((i) => typeof i !== "number"));

// ! find
// ! obs: retornará pelo menos um item (o primeiro) do array
console.log(array.find((i) => i % 2 === 0));

// ! findIndex
// ! obs: retornará o índice do item (o primeiro) encontrado
console.log(array.findIndex((i) => i % 2 === 0));

// ! reduce
// ! obs: usado para criar uma nova estrutura de dados a partir de um array
// ! obs: o reduce espera um parametro a mais, que é referente ao valor inicial
console.log(
    array.reduce((acc, i) => {
        return acc + item;
    }, 0)
);

// * Template Literals

const myName = "Paulo";
const message = `Bem vindo ${myName ?? "Visitante"}`;

// * Promises

// ? exemplo simple
const somaDoisNumeros = (num1, num2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num1 + num2);
        }, 2000);
    });
};

somaDoisNumeros(2, 3)
    .then((soma) => console.log(soma))
    .catch((err) => console.log("Deu erro"));

// ? exemplo avançado

fetch("https://api.github.com/users/paulovictor11")
    .then((response) => {
        response.json().then((body) => console.log(body));
    })
    .catch((error) => console.log(error));

fetch("https://api.github.com/users/paulovictor11")
    .then((response) => response.json())
    .then((body) => console.log(body))
    .catch((error) => console.log(error))
    .finally(() => console.log("Finalizou"));

// ! funções que possuem async no início, automaticamente são consideradas como uma Promise
async function buscaDadosGithub() {
    try {
        const response = await fetch(
            "https://api.github.com/users/paulovictor11"
        );
        const body = await response.json();

        console.log(body);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("finalizoy");
    }
}

buscaDadosGithub();

// * ES Modules
import { PI, soma, subtração } from "./lib/math";

console.log(soma(1, 2));
console.log(subtração(3, 2));
console.log(PI);
