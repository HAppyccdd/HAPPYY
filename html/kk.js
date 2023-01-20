var btopen = document.querySelector('.mybutton')
let modal = document.querySelector('.modal')
var btclose = document.querySelector('.modal__footer button')
let icclose = document.querySelector('.modal__header i')
function toggleModal(e){
    modal.classList.toggle('hide')
}
btopen.addEventListener('click', toggleModal)
btclose.addEventListener('click', toggleModal)
icclose.addEventListener('click', toggleModal)
modal.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        toggleModal()
    }
})
var clickopen = document.getElementById("okkkk");


var clickclose = document.getElementById("okkkk");


function hide() {
    clickopen.style.display = "block"
}
function show() {
    clickclose.style.display = "none"
}