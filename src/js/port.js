// Função para filtrar o conteúdo (Sobre, Trabalhos, Projetos)
function filtrar(tipo) {
    // Esconde todas as seções de conteúdo
    const secoes = document.querySelectorAll('.conteudo-secao');
    secoes.forEach(secao => {
        secao.classList.remove('ativo');
    });

    // Mostra a seção correspondente ao botão clicado
    const secaoAtiva = document.getElementById('conteudo-' + tipo);
    if (secaoAtiva) {
        secaoAtiva.classList.add('ativo');
    }

    // Atualiza qual botão de filtro está ativo
    const botoes = document.querySelectorAll('.filtro-container button');
    botoes.forEach(botao => {
        // Primeiro, remove a classe de todos para garantir um estado limpo
        botao.classList.remove('ativo-filtro');
        if (botao.getAttribute('onclick') === `filtrar('${tipo}')`) {
            botao.classList.add('ativo-filtro');
        } else {
            botao.classList.remove('ativo-filtro');
        }
    });
}

// Função para expandir/recolher os detalhes de um item de trabalho ou projeto
function toggleDetalhes(elementoResumo) {
    // Encontra o 'item-expansivel' pai do resumo que foi clicado
    const itemPai = elementoResumo.closest('.item-expansivel');
    
    if (itemPai) {
        // Alterna a classe 'aberto' no item pai
        itemPai.classList.toggle('aberto');
    }
}

// Garante que a aba "Sobre" esteja selecionada ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    filtrar('nome');
});
