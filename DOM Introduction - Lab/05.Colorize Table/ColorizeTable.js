function colorize() {
    const a = document.querySelectorAll('tr');

   for (let i = 0; i < a.length; i++) {
    if(i%2 == 1){
        a[i].style.backgroundColor = 'Teal';
    }
   }
}