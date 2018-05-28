function calculoSubtracao() {
    let n1 = document.getElementById('subtracaoPrimeiroCampo').value;
    let n2 = document.getElementById('subtracaoSegundoCampo').value;

    n1 = Number(n1);
    n2 = Number(n2);

    let result = n1 - n2;

    document.getElementById('subtracaoResultado').value = result;
}