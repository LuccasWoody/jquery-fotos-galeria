$(document).ready(function(){   /* usado o cifrão para chamar o JQuery */
    $('header button').click(function(){  /* faz a mesma coisa que o código de JS puro, só esta usando JQuery  */
        $('form').slideDown(); /* inicialmente o formulário não aparece, essa função faz aparecer o formulário, no css está na parte do form o display:none, que faz esconder*/
    })

    $('#cancelar').click(function(){
        $('form').slideUp(); /* essa parte faz o formulário se esconder de novo apertando o cancelar */
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); /* aqui começa a parte do código de adicionar imagem*/ 
        const novoItem = $('<li style="display: none"></li>'); /* o style display none faz com que a imagem não apareca, não fez muito sentido para mim que logo abaixo tem o recurso fadeIn*/
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank title="Ver imagem em  tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>        
            `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(); /* recurso de animação que faz surgir a imagem, pode colocar tempo dentro dos parenteses, por exemplo 5000(em milisegundois, ou 5 segundos)*/
        $('#endereco-imagem-nova').val('')    
    })
})

