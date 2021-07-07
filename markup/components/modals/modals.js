document.querySelectorAll('.modals .inner .close').forEach(el => {
    el.addEventListener('click', ()=> {
        el.closest('.modals').classList.toggle('modals--show')
    })
})
document.querySelector('.openModalJoinToClub').addEventListener('click', ()=> {
    document.querySelector('.joinToClub').classList.toggle('modals--show')
})
