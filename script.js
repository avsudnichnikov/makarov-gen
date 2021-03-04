function randInt(max, min = 0) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

function intDiv(a, b) {
    return (a - a % b) / b;
}

function addZeros(number, order = 2) {
    if (order <= 1) return '' + number || '';

    const thisDigit = number % 10;
    const nextNumber = intDiv(number, 10);

    if (thisDigit > 0){
        return addZeros(nextNumber, order - 1) + thisDigit;
    }

    return '0' + addZeros(nextNumber, order - 1);
}

function randFromArr(arr) {
    return arr[randInt(arr.length - 1)];
}

function randomTask(){
    const needed = randFromArr(taskGenBase.needed);
    const subModule = randFromArr(taskGenBase.subModule);
    const module = randFromArr(taskGenBase.module);
    const action = randFromArr(taskGenBase.action);
    const subject = randFromArr(taskGenBase.subject);
    return `${needed} ${subModule} ${module} ${action} ${subject}.`;
}

function randomAuthor(){
    const author = randFromArr(authorGenBase.authors);
    const color = randFromArr(authorGenBase.colors);
    const date = addZeros(randInt(24, 1)) + ':' + addZeros(randInt(59)) + ':' + addZeros(randInt(59));
    return `<strong style="color: ${color}">${author} ${date}</strong>`;
}

function taskFill(task, author){
    task.innerHTML = randomTask();
    author.innerHTML = randomAuthor();
}

window.addEventListener('load', () => {
    const task = document.querySelector('#task-field');
    const author = document.querySelector('#author-field');

    taskFill(task, author);
    document.querySelector('#task-gen').addEventListener('click', () => taskFill(task, author));
})

