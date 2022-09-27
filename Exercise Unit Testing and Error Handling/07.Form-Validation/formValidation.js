function validate() {
    const errors = [];

    let userName = document.getElementById('username');
    const validUserName = /^[A-Za-z0-9]{3,20}$/;

    let email = document.getElementById('email');
    const validEmailPatern = /^[^@.]+@[^@]*\.[^@]*$/;

    let password = document.getElementById('password');
    const validPassword = /^[\w]{5,15}$/;

    let confirmPassword = document.getElementById('confirm-password');
    const validConfirmPassword = /^[\w]{5,15}$/

    let companyInfo = document.getElementById('companyInfo');

    let companyNumber = document.getElementById('companyNumber');

    let company = document.getElementById('company');
    company.addEventListener('change', () => {
        if (company.checked === true) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    });

    let submit = document.getElementById('submit');

    submit.addEventListener('click', onclick);

    function onclick(e) {

        e.preventDefault();

        changeBorderColor(userName, validUserName);
        changeBorderColor(email, validEmailPatern);
        changeBorderColor(password, validPassword);
        changeBorderColor(confirmPassword, validConfirmPassword);

        if (company.checked === true) {
            if (companyNumber.value < 1000 || companyNumber.value > 9999) {
                companyNumber.style.borderColor = 'red';
                if (!errors.includes(companyNumber)) {
                    errors.push(companyNumber);
                }
            }
            else {
                companyNumber.style.borderColor = '';
                if (errors.includes(companyNumber)) {
                    errors.pop(errors.indexOf(companyNumber));
                };
            }
        }
        if (password.style.borderColor !== 'red' || confirmPassword.style.borderColor !== 'red') {
            if (password.value != confirmPassword.value) {
                password.style.borderColor = 'red';
                confirmPassword.style.borderColor = 'red';
                if (!errors.includes(password) || !errors.includes(confirmPassword)) {
                    errors.push(password);
                    errors.push(confirmPassword);
                }
            } else {
                password.style.borderColor = '';
                confirmPassword.style.borderColor = '';
                if (errors.includes(password) || errors.includes(confirmPassword)) {
                    errors.splice(errors.indexOf(password));
                    errors.splice(errors.indexOf(confirmPassword));
                };
            };
        }
        if (errors.length == 0) {
            document.getElementById('valid').style.display = 'block';
        } else {
            document.getElementById('valid').style.display = 'none';
        }
    }

    function changeBorderColor(field, validPatern) {
        if (!validPatern.test(field.value)) {
            field.style.borderColor = 'red';
            if (!errors.includes(field)) {
                errors.push(field);
            }
        } else {
            field.style.borderColor = '';
            if (errors.includes(field)) {
                errors.splice(errors.indexOf(field), 1);
            };
        }
    };
}
