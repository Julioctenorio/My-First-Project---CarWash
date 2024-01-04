$('.carousel').carousel({
  interval: 2000
})

document.addEventListener('DOMContentLoaded', function() {
  const toggleContacts = document.getElementById('toggleContacts');
  const contactsContent = document.getElementById('contactsContent');

  toggleContacts.addEventListener('click', function() {
    contactsContent.classList.toggle('hidden');
    const arrow = toggleContacts.innerHTML.includes('&#9660;') ? '&#9654;' : '&#9660;';
    toggleContacts.innerHTML = `Contatos ${arrow}`;
  });
});