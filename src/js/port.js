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
document.addEventListener('DOMContentLoaded', () => {
    const secoes = document.querySelectorAll('.conteudo-secao');
    const botoesFiltro = document.querySelectorAll('.filtro-container button');

    function filtrar(tipo) {
        // Esconde todas as seções
        secoes.forEach(secao => {
            secao.classList.remove('ativo');
        });

        // Mostra a seção correta
        const secaoAtiva = document.getElementById(`conteudo-${tipo}`);
        if (secaoAtiva) {
            secaoAtiva.classList.add('ativo');
        }

        // Atualiza o botão ativo
        botoesFiltro.forEach(botao => {
            botao.classList.toggle('ativo-filtro', botao.dataset.tipo === tipo);
        });
    }

    // Adiciona o evento de clique para cada botão
    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', () => {
            filtrar(botao.dataset.tipo);
        });
    });

    // Inicia com a aba "Sobre" (nome) ativa
    filtrar('nome'); 
});
