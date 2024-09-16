function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    document.getElementById('formResponse').innerHTML = `
        <p>Thank you, ${name}. We have received your message and will contact you at ${email} soon.</p>
    `;

    document.getElementById('contactForm').reset();
}
