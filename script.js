const btn = document.querySelectorAll('.botoes');

function capturarValor(event) {
    console.log(event);
}

btn.addEventListener('click', capturarValor);