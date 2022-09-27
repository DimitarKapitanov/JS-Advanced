function lockedProfile() {
    Array.from(document.getElementsByTagName('button')).forEach(b => b.addEventListener('click', showInformation));

    function showInformation(item) {
        let path = item.target.parentNode.children;

        for (let i = 0; i < path.length; i++) {
            if (path[i].type === 'radio' && path[i].value === 'lock') {
                if (path[i].checked === true) {

                    break;
                }
            } else if (path[i].type === 'radio' && path[i].value === 'unlock') {
                let a = item.target.previousElementSibling;

                if (item.target.textContent === 'Hide it') {
                    item.target.textContent = 'Show more';
                    a.style.display = 'none';

                } else {
                    item.target.textContent = 'Hide it';
                    a.style.display = 'block';
                }
            }
        }        
    }
}