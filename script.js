function randInt(max, min = 0) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

function intDiv(a, b) {
    return (a - a % b) / b;
}

function addZeros(number, order = 2) {
    if (order <= 1) return '';
    return addZeros(intDiv(number, 10), order - 1) +  number % 10;
}

function randFromArr(arr) {
    return arr[randInt(arr.length - 1)];
}

function randomTask() {
    const needed = randFromArr(taskGenBase.needed);
    const subModule = randFromArr(taskGenBase.subModule);
    const module = randFromArr(taskGenBase.module);
    const action = randFromArr(taskGenBase.action);
    const subject = randFromArr(taskGenBase.subject);
    return `${needed} ${subModule} ${module} ${action} ${subject}.`;
}

function randomAuthor() {
    const author = randFromArr(authorGenBase.authors);
    const now = new Date();
    const date = addZeros(now.getHours()) + ':' + addZeros(now.getMinutes()) + ':' + addZeros(now.getSeconds());
    return `${author} ${date}`;
}

function taskFill() {
    const author = document.createElement('div');
    author.className = 'message-header';
    author.innerText = randomAuthor();

    const task = document.createElement('div');
    task.className = 'message-body';
    task.innerHTML = randomTask();

    const message = document.createElement('div');
    message.className = `message is-${randFromArr(authorGenBase.colors)}`;

    message.append(author);
    message.append(task);

    document.querySelector('#messages').prepend(message);

    setTimeout(taskFill, randInt(1, 5) * 1000)
}

window.addEventListener('load', () => {
    taskFill();
})

