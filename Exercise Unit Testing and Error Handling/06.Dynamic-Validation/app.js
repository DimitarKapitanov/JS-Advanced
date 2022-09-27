function validate() {
    const validEmailPatern = /^[a-z]+\@[a-z]+\.[a-z]+$/;

    let email = document.getElementById('email');

    email.addEventListener('change', () => {
        if (validEmailPatern.test(email.value)) {
            email.classList.remove('error');
        } else {
            email.classList.add('error');
        }
    });
}