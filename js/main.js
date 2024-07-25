document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links ul');
    const navItems = document.querySelectorAll('.nav-item a');
    const navContainer = document.querySelector('.nav-links');

    const handleResize = () => {
        if (window.innerWidth >= 1200) {
            navContainer.classList.add('desktop');
            navContainer.classList.remove('mobile');
            navLinks.classList.add('active');
            burgerMenu.style.display = 'none';
        } else if (window.innerWidth >= 768) {
            navContainer.classList.add('mobile');
            navContainer.classList.remove('desktop');
            navLinks.classList.remove('active');
            burgerMenu.style.display = 'flex';
        } else {
            navContainer.classList.add('mobile');
            navContainer.classList.remove('desktop');
            navLinks.classList.remove('active');
            burgerMenu.style.display = 'flex';
        }
    };

    burgerMenu.addEventListener('click', () => {
        if (navContainer.classList.contains('mobile')) {
            navLinks.classList.toggle('active');
        }
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(link => link.classList.remove('active'));
            item.classList.add('active');
            if (navContainer.classList.contains('mobile')) {
                navLinks.classList.remove('active');
            }
        });
    });

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
});



document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    const searchInput = document.getElementById('productSearch');

    // Fonction de filtrage des produits par catégorie
    function filterProducts(category) {
        productCards.forEach(card => {
            if (category === 'all' || card.classList.contains(category)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Événement sur les boutons de filtrage
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            filterProducts(category);
        });
    });

    // Événement sur la barre de recherche
    searchInput.addEventListener('keyup', function() {
        const query = this.value.toLowerCase().trim();
        productCards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            if (title.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Initialiser le filtre avec "Tous" par défaut
    document.querySelector('.filter-btn[data-category="all"]').click();
});



