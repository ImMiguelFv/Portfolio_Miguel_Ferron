document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch('/api/sendMail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, subject, message })
        });

        const result = await response.json();
        if (response.ok) {
            alert('¡Mensaje enviado correctamente!');
        } else {
            alert('Error al enviar el mensaje: ' + result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un problema al enviar el correo.');
    }
});
