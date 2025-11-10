document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(a.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Active nav
    const sections = document.querySelectorAll('.section');
    const links = document.querySelectorAll('.nav-links a');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(l => {
                    l.classList.remove('active');
                    if (l.getAttribute('href').slice(1) === entry.target.id) {
                        l.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.5 });
    sections.forEach(s => observer.observe(s));

    // Chart
    const ctx = document.getElementById('growthChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['1986', '1996', '2006', '2016', '2025'],
                datasets: [{
                    label: 'Tăng trưởng GDP (%)',
                    data: [2.5, 5.8, 7.5, 6.8, 8.0],
                    borderColor: '#1d4ed8',
                    backgroundColor: 'rgba(29, 78, 216, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true } }
            }
        });
    }
});