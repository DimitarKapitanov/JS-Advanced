function create(words) {
   let content = document.getElementById('content');

   for (const item of words) {
      const divTag = document.createElement('div');
      const pTag = document.createElement('p');
      pTag.style.display='none';
      pTag.textContent = item;

      divTag.appendChild(pTag);
      divTag.addEventListener('click', changePTag);

      content.appendChild(divTag);
   }

   function changePTag(item){
      item.target.childNodes[0].style.display = 'block';
   }
}