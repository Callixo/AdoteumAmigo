// Menu Mobile
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
        
    mobileMenuButton.addEventListener('click', () => {
            
    const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            
    mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
            
// Icone
    const icon = mobileMenuButton.querySelector('i');
        if (isExpanded) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            }
        });

// Filtro de animais
    const filterButtons = document.querySelectorAll('[data-filter]');
    const petCards = document.querySelectorAll('.pet-card');
    const petSearch = document.getElementById('pet-search');
        
    filterButtons.forEach(button => {
    button.addEventListener('click', () => {
            
    const filter = button.dataset.filter;
                
// Atualizar status
    filterButtons.forEach(btn => {
        btn.classList.remove('bg-[#588157]', 'text-[#FAF3DD]');
        });
                
        if (filter !== 'all') {
            button.classList.add('bg-[#588157]', 'text-[#FAF3DD]');
            }
                
// Filtrar animais
    petCards.forEach(card => {
        if (filter === 'all' || card.dataset.type === filter) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
        });
    });
});
        
// Busca de animais
    petSearch.addEventListener('input', () => {
    
    const searchTerm = petSearch.value.toLowerCase();
            
        petCards.forEach(card => {
                
    const petName = card.querySelector('h3').textContent.toLowerCase();
                
        if (petName.includes(searchTerm)) {
            card.style.display = 'block';
            } else {
            card.style.display = 'none';
        }
    });
});

// Scroll suave 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();
                
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
                
        if (targetElement) {
            targetElement.scrollIntoView({
            behavior: 'smooth'
            });
                    
// Fechar menu mobile se estiver aberto
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenuButton.click();
            }
        }
    });
});

// Animação para botão de adoção
    const adoptionButtons = document.querySelectorAll('.pet-card button');
    adoptionButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
        button.querySelector('i').classList.add('fa-beat');
        });
        button.addEventListener('mouseleave', () => {
        button.querySelector('i').classList.remove('fa-beat');
        });
    });

