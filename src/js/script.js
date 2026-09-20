const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
});

const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('ativo');
            obs.unobserve(e.target);
        }
    });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));


document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-pergunta').addEventListener('click', () => {
        document.querySelectorAll('.faq-item').forEach(i => {
            if (i !== item) i.classList.remove('aberto');
        });
        item.classList.toggle('aberto');
    });
});


const btnTopo = document.getElementById('btnTopo');
window.addEventListener('scroll', () => {
    btnTopo.classList.toggle('ativo', window.scrollY > 500);
});


setTimeout(() => {
    if (!localStorage.getItem('cookies-ok')) {
        document.getElementById('cookies').classList.add('ativo');
    }
}, 2000);

function aceitarCookies() {
    localStorage.setItem('cookies-ok', 'true');
    document.getElementById('cookies').classList.remove('ativo');
}