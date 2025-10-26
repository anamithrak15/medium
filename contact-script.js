// Contact form handling
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');

            // Create mailto link - TO Harshavardini's email, FROM user's email
            const emailSubject = `Contact Form: ${subject}`;
            const emailBody = `Hello Harshavardini,

You have received a new message from your website contact form:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from your portfolio website contact form.
Please reply directly to: ${email}`;

            const mailtoLink = `mailto:harshavardinim2506@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

            // Open email client
            window.location.href = mailtoLink;

            // Show success message
            showSuccessMessage();

            // Reset form
            contactForm.reset();
        });
    }
});

function showSuccessMessage() {
    // Create success message element
    const successMessage = document.createElement('div');
    successMessage.innerHTML = `
        <div style="
            background: #d4edda;
            color: #155724;
            padding: 1rem;
            border-radius: 6px;
            margin-bottom: 1rem;
            border: 1px solid #c3e6cb;
        ">
            <strong>Message prepared!</strong> Your email client will open with a message to Harshavardini ready to send.
        </div>
    `;

    // Insert before the form
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(successMessage, form);

    // Remove message after 5 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
}