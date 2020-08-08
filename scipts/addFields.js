//  Procurar o botão
document.querySelector('#add-time')
.addEventListener('click', cloneField)
//  Quando clicar no botão

//  Executar uma ação
function cloneField() {
    //  Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //  Limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')
    fields.forEach( (field) => {
        field.value = ''
    })

    //  Colocar na página
    document.querySelector('#schedule-items').append(newFieldContainer)
}
