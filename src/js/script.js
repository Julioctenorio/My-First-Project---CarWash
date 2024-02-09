function openModal(){
  const modal = document.getElementById('window-modal')
  modal.classList.add('open')

  modal.addEventListener('click',  (e) => {
    if(e.target.id == 'close' || e.target.id == 'window-modal'){
      modal.classList.remove('open')
    }
  } )

}