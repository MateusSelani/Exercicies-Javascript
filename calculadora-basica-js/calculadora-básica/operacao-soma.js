function Calculo(){
    let n1 = document.getElementById('primeiroCampo').value;
    let n2 = document.getElementById('segundoCampo').value;

    n1 = Number(n1);
    n2 = Number(n2);

    let n3 = n1 + n2;

    document.getElementById('Resultado').value = n3;
}