function solve() {
   //TODO...
   let targetBtn = document.getElementsByClassName('add-product');
   let textarea = document.getElementsByTagName('textarea')[0];
   let checkoutBtn = document.getElementsByClassName('checkout')[0].addEventListener('click', checkoutTotalPrice);

   Array.from(targetBtn).forEach(e => e.addEventListener('click', addProduct));

   const list = [];

   let totalPrice = 0;

   function addProduct(item) {
      let parent = item.target.parentNode.parentNode.children;

      let _name = parent[1].children[0].textContent;
      if (!list.some(e=>e === _name)) {
         list.push(_name);
      }
      
      let money = Number(parent[3].textContent);
      totalPrice += money;
      textarea.innerHTML += `Added ${_name} for ${money.toFixed(2)} to the cart.\n`
   }

   function checkoutTotalPrice(item) {
      textarea.innerHTML += `You bought ${list.join(', ')} for ${totalPrice.toFixed(2)}.`;
      Array.from(targetBtn).forEach(e => e.removeEventListener('click', addProduct));
      item.target.removeEventListener('click', checkoutTotalPrice);
   }
}