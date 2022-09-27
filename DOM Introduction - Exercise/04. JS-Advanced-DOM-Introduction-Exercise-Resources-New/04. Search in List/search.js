function search() {

   // Declare variables
  
   let input = document.getElementById('searchText');
   let filter = input.value.toUpperCase();
   let ul = document.getElementById("towns");
   let li = ul.getElementsByTagName('li');
   let count = 0;
   // Loop through all list items, and hide those who don't match the search query
   for (i = 0; i < li.length; i++) {

      if (li[i].textContent.toUpperCase().indexOf(filter) > -1) {
         li[i].style.textDecoration = "underline";
         li[i].style.fontWeight = 'bold';
         count++;
      } else{
         li[i].style.textDecoration = "none";
         li[i].style.fontWeight = 'normal';
      }
   }
   document.getElementById('result').textContent = `${count} matches found`
}
