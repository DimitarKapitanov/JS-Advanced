window.addEventListener("load", solve);

function solve() {
  document.getElementById('publish').addEventListener('click', addCarInformation);

  let make = document.getElementById('make');
  let model = document.getElementById('model');
  let year = document.getElementById('year');
  let fuel = document.getElementById('fuel');
  let originalCost = document.getElementById('original-cost');
  let sellingPrice = document.getElementById('selling-price');
  let soldCarsEl = document.getElementById("cars-list");
  let totalProfit = document.getElementById("profit");
  let profitMade = 0;

  function addCarInformation(event) {
    event.preventDefault();

    if (originalCost.value < sellingPrice.value &&
      make.value !== '' &&
      model.value !== '' &&
      year.value !== '' &&
      fuel.value !== '' &&
      originalCost.value !== '' &&
      sellingPrice.value !== ''
    ) {

      const tBody = document.getElementById('table-body');

      const tRow = document.createElement('tr');
      tRow.classList.add('row');

      const tdMake = document.createElement('td');
      tdMake.textContent = make.value;

      const tdModel = document.createElement('td');
      tdModel.textContent = model.value;

      const tdYear = document.createElement('td');
      tdYear.textContent = year.value;

      const tdFuel = document.createElement('td');
      tdFuel.textContent = fuel.value;

      const tdOriginalCost = document.createElement('td');
      tdOriginalCost.textContent = originalCost.value;

      const tdsellingPrice = document.createElement('td');
      tdsellingPrice.textContent = sellingPrice.value;

      const tdBtn = document.createElement('td');

      const buttonEdit = document.createElement('button');
      buttonEdit.textContent = 'Edit';
      buttonEdit.classList.add('action-btn');
      buttonEdit.classList.add('edit');
      buttonEdit.addEventListener('click', editCar);

      const buttonSell = document.createElement('button');
      buttonSell.textContent = 'Sell';
      buttonSell.classList.add('action-btn')
      buttonSell.classList.add('sell')
      buttonSell.addEventListener('click', sellCar);

      tdBtn.appendChild(buttonEdit);
      tdBtn.appendChild(buttonSell);

      tRow.appendChild(tdMake);
      tRow.appendChild(tdModel);
      tRow.appendChild(tdYear);
      tRow.appendChild(tdFuel);
      tRow.appendChild(tdOriginalCost);
      tRow.appendChild(tdsellingPrice);
      tRow.appendChild(tdBtn);

      tBody.appendChild(tRow);

      make.value = '';
      model.value = '';
      year.value = '';
      fuel.value = '';
      originalCost.value = '';
      sellingPrice.value = '';
    }
  }

  function editCar() {
    const row = this.parentElement.parentElement.childNodes;
    this.parentElement.parentElement.remove();

    make.value = row[0].textContent;
    model.value = row[1].textContent;
    year.value = row[2].textContent;
    fuel.value = row[3].textContent;
    originalCost.value = row[4].textContent;
    sellingPrice.value = row[5].textContent;
  }
  function sellCar() {
    const [currMake, currModel, currYear, currFuel, currOriginalCost, currSellingPrice] = this.parentElement.parentElement.childNodes;
    profitMade += Number(currSellingPrice.textContent) - Number(currOriginalCost.textContent);

    const li = document.createElement('li');
    li.classList.add('each-list');

    const spanMake = document.createElement('span');
    spanMake.textContent = `${currMake.textContent} ${currModel.textContent}`;

    const spanYear = document.createElement('span');
    spanYear.textContent = currYear.textContent;

    const spandDifference = document.createElement('span');
    spandDifference.textContent = Number(currSellingPrice.textContent) - Number(currOriginalCost.textContent);
    totalProfit.textContent = profitMade.toFixed(2);

    li.appendChild(spanMake);
    li.appendChild(spanYear);
    li.appendChild(spandDifference);

    soldCarsEl.appendChild(li);
    this.parentElement.parentElement.remove();
  }
}
