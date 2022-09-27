function solve() {
	let generateBtn = document.querySelector('#exercise>button');
	const buyBtn = document.getElementById('exercise').lastElementChild.addEventListener('click', buyProducts);
	generateBtn.addEventListener('click', generateItems);

	function generateItems(item) {
		let input = JSON.parse(item.target.previousElementSibling.value);
		const tbody = document.querySelector('tbody');

		for (let i = 0; i < input.length; i++) {
			const element = input[i];
			const tr = document.createElement('tr');

			const tdImgTag = document.createElement('td');
			const imgTag = document.createElement('img');
			imgTag.src = element.img;
			tdImgTag.appendChild(imgTag);

			const tdPTagname = document.createElement('td');
			const pTagName = document.createElement('p');
			pTagName.textContent = element.name;
			tdPTagname.appendChild(pTagName);

			const tdPTagPrice = document.createElement('td');
			const pTagPrice = document.createElement('p');
			pTagPrice.textContent = element.price;
			tdPTagPrice.appendChild(pTagPrice);

			const tdPTagDecFactor = document.createElement('td');
			const pTagDecFactor = document.createElement('p');
			pTagDecFactor.textContent = element.decFactor;
			tdPTagDecFactor.appendChild(pTagDecFactor);

			const tdInputTag = document.createElement('td');
			const inputTag = document.createElement('input');
			inputTag.type = 'checkbox';
			tdInputTag.appendChild(inputTag);

			tr.appendChild(tdImgTag);
			tr.appendChild(tdPTagname);
			tr.appendChild(tdPTagPrice);
			tr.appendChild(tdPTagDecFactor);
			tr.appendChild(tdInputTag);
			tbody.appendChild(tr);
		}
	}

	function buyProducts(item) {
		const test = document.querySelectorAll('tbody>tr>td>input');
		const boughtFurniture = [];
		let totalPrice = 0;
		const averageDecorationFactor = [];
		for (let i = 0; i < test.length; i++) {
			if (!test[i].checked) {
				continue;
			}
			const _name = test[i].parentNode.parentNode.childNodes[1].childNodes[0].textContent;
			boughtFurniture.push(_name);

			totalPrice += Number(test[i].parentNode.parentNode.childNodes[2].childNodes[0].textContent);

			const decorationFactor = Number(test[i].parentNode.parentNode.childNodes[3].childNodes[0].textContent);

			averageDecorationFactor.push(decorationFactor);
		}

		const averageDecFactor = averageDecorationFactor.reduce((partialSum, a) => partialSum + a, 0) / averageDecorationFactor.length;

		item.target.previousElementSibling.textContent = `Bought furniture: ${boughtFurniture.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageDecFactor}`;
	}
}