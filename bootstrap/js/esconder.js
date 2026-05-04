var btn = document.querySelector('.circuloAbrir');
var divEsconder = document.querySelector('#divAgradecimentos');

btn.addEventListener('click', function(){
    if(divEsconder.style.display === 'block'){
        divAgradecimentos.style.display = 'none';
    } else {
        divAgradecimentos.style.display = 'block';
    }
});