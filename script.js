
const salario = Number(prompt("Digite salario atual"))
const porcentagem = Number(prompt("Digite porcentagem de ajuste"))
const percentual = porcentagem / 100
const aumento = percentual*salario
const novoSalario = salario+aumento

        console.log("Novo salario: "+salario.toFixed(2))

document.write("Novo salario: " + novoSalario.toFixed(2))
