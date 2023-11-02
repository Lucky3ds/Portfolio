var btn = document.querySelector('#show-or-hide');
var quadro = document.querySelector('.hide');

btn.addEventListener('click', function(){
    if(quadro.style.display ==='flex'){
        this.textContent  = "Mais projetos"
        quadro.style.display = "none";
    }else{
        this.textContent  = "Esconder projetos"
        quadro.style.display = 'flex';
      
    }
})