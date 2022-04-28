const btnEdit = document.querySelectorAll('.bxs-edit')
const btnDelete = document.querySelectorAll('.bx-trash')

function showUpdateItem () {
    let updateItem = `
    <div class="update-register">
        <div class="update-title">
            <h2>Atualizar material</h2>
            <i class='bx bx-x'></i>
        </div>
        <div class="group">
            <div class="codigo">
                <label>Codigo:</label>
                <input type="text">
            </div>

            <div class="lanc">
                <label>Atualizado:</label>
                <input type="date" disabled>
            </div>
        </div>

        <div class="desc">
            <label>Descrição:</label>
            <input type="text">
        </div>

        <div class="group">
            <div class="local">
                <label>Localização:</label>
                <input type="text">
            </div>

            <div class="tmedida">
                <label>Un. medida:</label>
                <select name="tmedida" id="tmedida">
                    <option value="null">Selecione</option>
                    <option value="unidade">Unidade</option>
                    <option value="galao">Galão</option>
                    <option value="centena">Centena</option>
                    <option value="metro">Metro</option>
                    <option value="peca">Peça</option>
                </select>
            </div>

            <div class="estoque">
                <label>Estoque:</label>
                <input type="text">
            </div>
        </div>
        <button class="btn-reg-materials">Salvar</button>
        <button class="btn-reg-materials btn-clean">Cancelar</button>
    </div>
    `

    bgMessage.addEventListener('click', e => {
        if(e.target.textContent === 'Cancelar' || e.target.classList.contains('bx-x')) {
            bgMessage.style.display = 'none'
        }
    })

    bgMessage.innerHTML = updateItem
}

btnEdit.forEach(element => {
    element.onclick = () => {
        bgMessage.style.display = 'block'
        showUpdateItem()
    }
})

btnDelete.forEach(element => {
    let msg = 'Você está prestes a deletar um item do seu estoque, após a exclusão não será mais possivel utiliza-lo, Tem certeza que deseja continuar?'

    element.onclick = () => user.messagePopup(msg, true)
})