function randInt(max, min = 0) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

function intDiv(a, b) {
    return (a - a % b) / b;
}

function addZeros(number, order) {
    if (order <= 1) return '' + number;
    return addZeros(intDiv(number, 10), order - 1) + number % 10;
}

Array.prototype.random = function () {
    return this[randInt(this.length - 1)];
}

function randomTask() {
    const needed = taskGenBase.needed.random();
    const subModule = taskGenBase.subModule.random();
    const module = taskGenBase.module.random();
    const action = taskGenBase.action.random();
    const subject = taskGenBase.subject.random();
    return `${needed} ${subModule} ${module} ${action} ${subject}.`;
}

function randomAuthor() {
    const author = authorGenBase.authors.random();
    const now = new Date();
    const hours = addZeros(now.getHours(), 2);
    const minutes = addZeros(now.getMinutes(), 2);
    const seconds = addZeros(now.getSeconds(), 2);
    return `${author} ${hours}:${minutes}:${seconds}`;
}

function taskFill() {
    const author = document.createElement('div');
    author.className = 'message-header';
    author.innerText = randomAuthor();

    const task = document.createElement('div');
    task.className = 'message-body';
    task.innerHTML = randomTask();

    const message = document.createElement('div');
    message.className = `message is-${authorGenBase.colors.random()}`;

    message.append(author);
    message.append(task);

    document.querySelector('#messages').prepend(message);

    setTimeout(taskFill, randInt(1, 5) * 1000)
}

window.addEventListener('load', () => {
    taskFill();
})

