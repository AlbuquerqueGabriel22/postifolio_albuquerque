// Função para filtrar o conteúdo exibido
function filtrar(categoria) {
    // Seleciona todos os elementos com a classe 'conteudo-secao' (todas as seções)
    const secoes = document.querySelectorAll('.conteudo-secao');
    // Seleciona todos os botões no filtro
    const botoes = document.querySelectorAll('.filtro-container button');
    
    // 1. Esconde todas as seções e remove a classe 'ativo-filtro' de todos os botões
    secoes.forEach(secao => {
        secao.classList.remove('ativo');
    });

    botoes.forEach(botao => {
        botao.classList.remove('ativo-filtro');
    });

    // 2. Mostra a seção correta e ativa o botão correspondente
    const secaoAlvo = document.getElementById(`conteudo-${categoria}`);
    const botaoAlvo = document.querySelector(`.filtro-container button[onclick="filtrar('${categoria}')"]`);

    if (secaoAlvo) {
        secaoAlvo.classList.add('ativo');
    }
    if (botaoAlvo) {
        botaoAlvo.classList.add('ativo-filtro');
    }
}

// Garante que a seção "Sobre" seja exibida ao carregar a página.
document.addEventListener('DOMContentLoaded', () => {
    filtrar('nome');
});

// Função para expandir/recolher os detalhes de um projeto ou trabalho
function toggleDetalhes(elementoResumo) {
    // Encontra o elemento pai '.item-expansivel'
    const itemPai = elementoResumo.parentElement;
    // Encontra o conteúdo de detalhes dentro do item pai
    const detalhes = itemPai.querySelector('.item-detalhes');
    // Encontra o ícone de seta
    const icone = elementoResumo.querySelector('.icone-expandir');

    // Alterna a exibição dos detalhes
    detalhes.style.display = detalhes.style.display === 'block' ? 'none' : 'block';

    // Gira o ícone para indicar o estado (aberto/fechado)
    icone.style.transform = detalhes.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
}