function calculoDivisao() {
    let n1 = document.getElementById('divisaoPrimeiroCampo').value;
    let n2 = document.getElementById('divisaoSegundoCampo').value;

    n1 = Number(n1);
    n2 = Number(n2);

    let result = n1 / n2;

    document.getElementById('divisaoResultado').value = result;
}