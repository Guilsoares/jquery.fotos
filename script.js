$(document).ready(function(){


    //Usando o Jquery para buscar o elemento no HTML e executando a funcão
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#cancel').click(function(){
        $('form').slideUp();
    })


    $('form').on('submit', function(e){
        e.preventDefault()
        const enderecodaNovaImagem = $('#newImg').val() // Sempre utilizar o Val() para indicar que o objeto seja um valor
        const novoItem = $('<li style="display:none"></li>')
        $(`<img src="${enderecodaNovaImagem}" />`).appendTo(novoItem)
        $(`
            <div class="overlay">
                <a href="${enderecodaNovaImagem}" target="_blank" title="Ver imagem em tamanho real" >
                    Ver Imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul') // Utilizando o AppendTo, eu criei as Tags no HTML acrescentando dentro da minha Variável

        $('#newImg').val('') // Desta forma, após inserir a imagem, ele vai limpar o campo;
        $(novoItem).fadeIn(2500) // fadeIn é uma função do Jquery de fazer com que o item surja. Entre parentese eu coloquei o tempo de transição que está em milisegundos

    })

})