document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    this.reset();
});

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const wasActive = faqItem.classList.contains('active');
        
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        if (!wasActive) {
            faqItem.classList.add('active');
        }
    });
});

document.getElementById('phone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    
    let formattedValue = '';
    if (value.length > 0) {
        formattedValue = '(' + value.slice(0, 2);
        if (value.length > 2) {
            formattedValue += ') ' + value.slice(2, 7);
            if (value.length > 7) {
                formattedValue += '-' + value.slice(7);
            }
        }
    }
    
    e.target.value = formattedValue;
});