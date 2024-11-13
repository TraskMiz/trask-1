function sendEmail(event) {
    event.preventDefault(); // Voorkom dat het formulier de standaard verzending uitvoert
  
    // Haal de veldwaarden op uit het formulier
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
  
    // Maak een e-mailbericht aan
    const mailtoLink = `mailto:loussakoutm@hotmail.com?subject=Nieuw bericht van ${name}&body=Naam: ${name}%0AEmail: ${email}%0ATelefoon: ${phone}%0A%0A${message}`;
  
    // Open de e-mailclient met het samengestelde e-mailbericht
    window.location.href = mailtoLink;
  }