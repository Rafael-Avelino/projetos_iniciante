const todosPaineis = document.querySelectorAll(".painel")

todosPaineis.forEach(painel => {
    painel.addEventListener('mouseover', () => {
        removeClassActive()
        painel.classList.add('active')
    })
})

function removeClassActive(){
    todosPaineis.forEach(painel => {
        painel.classList.remove('active')
    })
}