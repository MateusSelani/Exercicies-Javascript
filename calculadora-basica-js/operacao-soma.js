function calculoSoma(){
    let n1 = document.getElementById('somaPrimeiroCampo').value;
    let n2 = document.getElementById('somaSegundoCampo').value;

    n1 = Number(n1);
    n2 = Number(n2);

    let result = n1 + n2;

    document.getElementById('somaResultado').value = result;
}