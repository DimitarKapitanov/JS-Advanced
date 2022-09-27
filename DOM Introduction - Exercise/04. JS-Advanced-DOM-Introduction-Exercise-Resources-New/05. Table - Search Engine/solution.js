function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let input = document.getElementById('searchField');
      let filter = input.value.toUpperCase();
      let tr = Array.from(document.querySelectorAll("tbody tr"));

      tr.map(e =>e.classList.remove('select'));
      
      for (i = 0; i < tr.length; i++) {
         let td = tr[i].querySelectorAll('td');

         for (const data of td) {
            if (data.textContent.toUpperCase().indexOf(filter) > -1) {
               tr[i].classList.add('select');
               document.getElementById('searchField').value = '';
               break;
            } else{
            }
         }
      }
   }
}