function solve() {
    let formInput = document.getElementById('container');

    let moveiesSection = document.getElementById('movies');
    let archiveSection = document.getElementById('archive');

    archiveSection.children[2].addEventListener('click', clear);

    let quantity;
    let ticketPriceCurrMovei = 0;
    let movieName = '';
    let [name, hall, ticketPrice,] = document.querySelectorAll('form>div>input');

    formInput.children[3].addEventListener('click', moviesOnScreen);

    function moviesOnScreen(event) {
        event.preventDefault();
        let price = Number(ticketPrice.value)
        if (name.value == '' || hall.value == '' || Object.is(price, NaN) || ticketPrice.value == '') {
            return;
        }
        moveiesSection.children[1].appendChild(createElement('div', 'strong', 'input'));
        name.value = '';
        hall.value = '';
        ticketPrice.value = '';
    }

    function archive(item) {
        quantity = item.target.previousElementSibling.value;

        if (Object.is(Number(quantity), NaN) || quantity == '') {
            console.log(Number(quantity));
            return;
        }

        ticketPriceCurrMovei = Number(item.target.parentElement.children[0].textContent);
        movieName = item.target.parentElement.parentElement.firstChild.textContent;
        archiveSection.children[1].appendChild(createElement());

        let li = item.target.parentElement.parentElement;
        li.remove();
    }

    function deleteArchive(item) {
        item.target.parentElement.remove();
    }

    function clear(item) {
        let ul = item.target.previousElementSibling
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
    }

    function createElement(div, strongInDiv, input, ) {

        const li = document.createElement('li');
        const span = document.createElement('span');
        const strong = document.createElement('strong');
        let button = document.createElement('button');

        if (div != undefined && strongInDiv != undefined && input != undefined &&
            div === 'div' && strongInDiv === 'strong' && input === 'input') {
            button.textContent = 'Archive'
            button.addEventListener('click', archive);

            const liDiv = document.createElement(div);
            const strongForDiv = document.createElement(strongInDiv);
            const input = document.createElement('input');
            input.placeholder = 'Tickets Sold';

            strong.textContent = `Hall: ${hall.value}`;
            strongForDiv.textContent = `${Number(ticketPrice.value).toFixed(2)}`;

            liDiv.appendChild(strongForDiv);
            liDiv.appendChild(input);
            liDiv.appendChild(button)
            span.textContent = `${name.value}`;
            li.appendChild(span);
            li.appendChild(strong);
            li.appendChild(liDiv);
        } else {
            strong.textContent = `Total amount: ${Number(ticketPriceCurrMovei * quantity).toFixed(2)}`;
            button.textContent = 'Delete'
            button.addEventListener('click', deleteArchive);
            span.textContent = `${movieName}`;
            li.appendChild(span);
            li.appendChild(strong);
            li.appendChild(button);
        }


        return li;
    }
}   