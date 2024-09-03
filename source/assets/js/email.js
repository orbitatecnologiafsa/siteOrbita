document.getElementById('contactForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Evita o envio do formulário via HTML

    const formData = {
        nome: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };

    const response = await fetch('https://emails-landingpage.onrender.com/enviar-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'vagalume2023'
        },
        body: JSON.stringify(formData)
    });

    const result = await response.json();
    alert(result.message);
});