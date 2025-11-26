// Lógica para o menu lateral (sidebar)
function setupSidebar() {
    const menuToggle = document.getElementById('menu-toggle');
    const mainContainer = document.querySelector('.body-container');
    const sidebar = document.getElementById('sidebar');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    // Função para abrir/fechar o menu
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        mainContainer.classList.toggle('sidebar-open');
    });

    // Função para fechar o menu ao clicar em um link
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('open');
            mainContainer.classList.remove('sidebar-open');
        });
    });

    // Função para fechar o menu ao clicar fora dele
    document.addEventListener('click', (event) => {
        if (sidebar.classList.contains('open') && !sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.classList.remove('open');
            mainContainer.classList.remove('sidebar-open');
        }
    });
}

function setupProjectModal() {
    const modal = document.getElementById('project-modal');
    const modalBody = modal.querySelector('.modal-body');
    const closeModalBtn = modal.querySelector('.modal-close');
    const detailButtons = document.querySelectorAll('.btn-link-projeto');

    // Função para abrir o modal
    const openModal = (content) => {
        modalBody.innerHTML = ''; // Limpa o conteúdo anterior
        modalBody.appendChild(content);
        modal.classList.add('visible');
        document.body.style.overflow = 'hidden'; // Impede o scroll da página principal
    };

    // Função para fechar o modal
    const closeModal = () => {
        modal.classList.remove('visible');
        document.body.style.overflow = ''; // Restaura o scroll da página
    };

    // Adiciona evento de clique para cada botão "Ver Detalhes"
    detailButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectCard = button.closest('.project-card');
            const detailsContent = projectCard.querySelector('.project-details').cloneNode(true);
            // Torna o conteúdo visível antes de injetá-lo no modal
            detailsContent.style.display = 'block';
            openModal(detailsContent);
        });
    });

    // Eventos para fechar o modal
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) { // Fecha se clicar no overlay (fundo)
            closeModal();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Ativa a funcionalidade do menu lateral
    setupSidebar();

    // Ativa a funcionalidade do modal de projetos
    setupProjectModal();

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe 'active' de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona a classe 'active' ao botão clicado
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            // Itera sobre cada cartão de projeto
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                const shouldShow = filter === 'all' || category === filter;

                if (shouldShow) {
                    // Lógica para MOSTRAR o cartão suavemente
                    card.classList.remove('d-none');
                    // Usamos um pequeno timeout para garantir que o 'display' seja aplicado antes da transição de opacidade
                    setTimeout(() => {
                        card.classList.remove('project-card-hidden');
                    }, 10);
                } else {
                    // Lógica para ESCONDER o cartão suavemente
                    card.classList.add('project-card-hidden');
                    // Espera a animação de fade-out terminar antes de adicionar display: none
                    card.addEventListener('transitionend', () => {
                        card.classList.add('d-none');
                    }, { once: true }); // 'once: true' garante que o listener seja removido após ser executado
                }
            });
        });
    });
});
