//Procurar o botão

document.querySelector("#add-time")

//Quando clicar no botão

.addEventListener('click',cloneField)

//Executar uma ação

function cloneField() {
    //Duplicar os campos. Que campos?
   
   const newfieldsContainer = document.querySelector('.schedule-item').cloneNode(true)//true ou false

    //limpar os campos. Que campos?

    const fields = newfieldsContainer.queryseletorAll('input')

    fields.forEach(function(field){
        //pega o field do momoento e limpa ele
        field.value = ""
    })
   

    //colocar na página:onde?

    document.querySelector('#schedule-items').appendChild(newfieldsContainer)

}