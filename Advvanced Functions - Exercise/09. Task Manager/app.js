function solve() {
    document.getElementById('add').addEventListener('click', addTask);

    let task = document.getElementById('task');
    let description = document.getElementById('description');
    let text = document.getElementById('date');

    const [, orange, yellow, green] = document.querySelectorAll('section');

    function addTask(event) {
        event.preventDefault();
        if (task.value == '' || description.value == '' || text.value == '') {
            return;
        }
        orange.children[1].appendChild(createElement());
        task.value = null;
        description.value = null;
        text.value = null;
    }

    function start() {
        let finishBtn = document.createElement('button');
        finishBtn.textContent = 'Finish';
        finishBtn.className = 'yellow';
        finishBtn.addEventListener('click', complete)

        let element = this.parentElement.parentElement;

        element.lastChild.removeChild(this);
        element.lastChild.appendChild(finishBtn);
        orange.children[1].removeChild(element);
        yellow.children[1].appendChild(element)
    }

    function complete() {
        let element = this.parentElement.parentElement;
        element.removeChild(element.lastChild);
        yellow.children[1].removeChild(element);
        green.children[1].appendChild(element);
    }

    function deleteArticle() {
        let element = this.parentElement.parentElement;
        if (orange.children[0].children[0].className ==
            element.parentElement.parentElement.children[0].children[0].className) {
            orange.children[1].removeChild(element);
        } else {
            yellow.children[1].removeChild(element)
        }
    }

    function createElement() {
        let starBtn = document.createElement('button');
        starBtn.textContent = 'Start';
        starBtn.className = 'green';
        starBtn.addEventListener('click', start);

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'red';
        deleteBtn.addEventListener('click', deleteArticle);

        const article = document.createElement('li');
        const h3 = document.createElement('h3');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const div = document.createElement('div');
        h3.textContent = `${task.value}`;
        p1.textContent = `Description: ${description.value}`;
        p2.textContent = `Due Date: ${text.value}`;
        div.className = 'flex';
        div.appendChild(starBtn);
        div.appendChild(deleteBtn);
        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(div);
        return article;
    }
}