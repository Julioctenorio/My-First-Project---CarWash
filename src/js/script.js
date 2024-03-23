function openModal() {
  const modal = document.getElementById('window-modal')
  modal.classList.add('open')

  modal.addEventListener('click', (e) => {
    if (e.target.id == 'close' || e.target.id == 'window-modal') {
      modal.classList.remove('open')
    }
  })
}

document.getElementById('toggle').addEventListener('change', function () {
  document.querySelector('.menu').style.display = this.checked ? 'flex' : 'none';
});

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("toggle");
  var menuLinks = document.querySelectorAll(".menu a");

  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      toggle.checked = false;
    });
  });
});


