document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.mobile-nav');
    const body = document.body;

    if (hamburger && nav) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
            body.classList.toggle('menu-open');
        });

        // Menü linklerine tıklandığında menüyü kapat
        document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });

        // Menü dışına tıklandığında menüyü kapat
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
    }
}); 