import  Modal  from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Pegar todos os botões que existem com a classe chack
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    //adicionar a escuta
    button.addEventListener("click", handleClick)
})


//Quando o botão delete for clicado ele abre a modal
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button =>{
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true){
    event.preventDefault()
    const text = check ? "marcar como lida " : "excluir "
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionID = event.target.dataset.id

    const form = document.querySelector('.modal form')
    form.setAttribute("action", `/question/${roomId}/${questionID}/${slug}`)

    modalTitle.innerHTML = `${text}  esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text}`
    check? modalButton.classList.remove("red") : modalButton.classList.add("red")

    //abrir moDAL
    modal.open()
}
