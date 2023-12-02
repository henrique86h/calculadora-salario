function calcular(){
    let salario_hora = document.getElementById("salario_hora").value
    let quantidade_hora = document.getElementById("quantidade_hora").value
    let total = parseFloat(salario_hora) * parseFloat(quantidade_hora)
    document.getElementById("resultado").innerText = total
}