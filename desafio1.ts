/*
Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John";
*/

// resposta 01
const employee ={
    codigo: 10,
    nome: 'joão'
};

//resposta 02
const employee2: {codigo: number, nome: string}={
    codigo:10,
    nome: 'joão'
};

//resposta 03
interface employee {
    codigo: number,
    nome: string
};