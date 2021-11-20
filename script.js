const calcular = document.getElementById('calcular');

function calculo () {

    const nome = document.getElementById('nome').value;
    const mensais = document.getElementById('mensais').value;
    const juros = document.getElementById('juros').value;
    const numero = document.getElementById('numero').value;

    if (nome !== ''&& mensais !== '' && juros !== ''  && numero !== '') {

            const taxa_real = juros/100;
            const metade = ((((1 + taxa_real )** numero) - 1)/taxa_real) ;
            const total = mensais * metade .toFixed(2);
      
            resultado.textContent = `${nome}, ao aplicar R$ ${mensais}, com uma taxa de ${juros}% ao mês, durante ${numero} meses, você irá acumular uma poupança de R$${total}.`;

    }
    else {
        resultado.textContent = 'Preencha todos os campos.';
    }

}
calcular.addEventListener('click', calculo);