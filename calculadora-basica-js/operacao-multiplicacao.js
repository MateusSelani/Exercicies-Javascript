function calculoMultiplicacao() {
    let n1 = document.getElementById('multiplicacaoPrimeiroCampo').value;
    let n2 = document.getElementById('multiplicacaoSegundoCampo').value;

    n1 = Number(n1);
    n2 = Number(n2);

    let result = n1 * n2;

    document.getElementById('multiplicacaoResultado').value = result;
}