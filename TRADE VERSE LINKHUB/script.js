document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      document.getElementById('formStatus').textContent = 'Message sent successfully!';
      contactForm.reset();
    });
  }
});
