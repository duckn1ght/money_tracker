function openPopUp(title, type) {
    let popUp = document.createElement('div');
    let popUpContainer = document.createElement('div');
    let text = document.createElement('p');
    let input = document.createElement('input');
    let btnContainer = document.createElement('div');
    let addBtn = document.createElement('button');
    let closeBtn = document.createElement('button');
    document.body.style.overflow = 'hidden';
    addBtn.classList.add('btn2');
    addBtn.textContent = 'Добавить';
    if (type == 'stonk') {
        addBtn.onclick = () => {
            addStonk(input.value)
        }
    } else {
        addBtn.onclick = () => {
            addNoStonk(input.value)
        }
    }
    closeBtn.classList.add('btn2');
    closeBtn.textContent = 'Отменить'
    closeBtn.onclick = () => {
        document.body.style.overflow = 'auto';
        popUp.remove();
    }

    btnContainer.classList.add('pop_up__buttons');
    popUp.classList.add('pop_up');
    popUpContainer.classList.add('pop_up_container')
    text.textContent = title;
    input.type = 'number';
    input.min = 0;

    document.body.append(popUp);
    popUp.append(popUpContainer)
    popUpContainer.append(text);
    popUpContainer.append(input);
    popUpContainer.append(btnContainer);
    btnContainer.append(addBtn);
    btnContainer.append(closeBtn);
}

function addStonk(val) {
    if(val != '' && val >= 0) {
        alert(`Прибыль: ${val}`);
        document.body.style.overflow = 'auto';
        document.querySelector('.pop_up').remove();
    } else {
        console.log('error');
    }
}

function addNoStonk(val) {
    if(val != '' && val >= 0) {
        alert(`Расход: ${val * (-1)}`)
        document.body.style.overflow = 'auto';
        document.querySelector('.pop_up').remove();
    } else {
        console.log('error');
    }
}
function openPopUpAccounts() {
    let popUp = document.createElement('div');
    let popUpContainer = document.createElement('div');
    let text = document.createElement('p');
    let input = document.createElement('input');
    let btnContainer = document.createElement('div');
    let addBtn = document.createElement('button');
    let closeBtn = document.createElement('button');
    document.body.style.overflow = 'hidden';
    addBtn.classList.add('btn2');
    addBtn.textContent = 'Добавить';
    addBtn.onclick = () => {
        alert(`Добавить счет ${input.value}`);
        document.body.style.overflow = 'auto';
        popUp.remove();
    }
    closeBtn.classList.add('btn2');
    closeBtn.textContent = 'Отменить'
    closeBtn.onclick = () => {
        document.body.style.overflow = 'auto';
        popUp.remove();
    }

    btnContainer.classList.add('pop_up__buttons');
    popUp.classList.add('pop_up');
    popUpContainer.classList.add('pop_up_container')
    text.textContent = 'Добавить счет';
    input.type = 'text';

    document.body.append(popUp);
    popUp.append(popUpContainer)
    popUpContainer.append(text);
    popUpContainer.append(input);
    popUpContainer.append(btnContainer);
    btnContainer.append(addBtn);
    btnContainer.append(closeBtn);
}


addEventListener('DOMContentLoaded', () => {
    let addStonkBtn = document.getElementById('stonkBtn');
    let addNoStonkBtn = document.getElementById('noStonkBtn');
    addStonkBtn.onclick = () => {
        openPopUp('Добавить запись о доходе', 'stonk');
    }
    addNoStonkBtn.onclick = () => {
        openPopUp('Добавить запись о расходе', 'noStonk');
    }
})