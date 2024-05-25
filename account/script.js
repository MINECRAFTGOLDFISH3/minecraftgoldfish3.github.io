var formStatus = 'success'
// async function sendData() {
    // const formData = new FormData();
    // try {
        // const response = await fetch("https://minecraftgoldfish3.github.io/account/sent.html", {
            // method: "post",
            // body: formData,
        // });
        // console.log(await response.json());
    // } catch (e) {
        // console.error(e);
        // formStatus = 'error'
    // }
// }

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector('.form_message');

    messageElement.textContent = message;
    messageElement.classList.remove('form_message-success', 'form_message-error');
    messageElement.classList.add(`form_message-${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add('form_input-error');
    inputElement.parentElement.querySelector('.form_input-error-message').textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove('form_inpur-error');
    inputElement.parentElement.querySelector('.form_input-error-message').textContent = '';
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector('#login');
    const signupForm = document.querySelector('#signup');

    document.querySelector("#link_create_account").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add('form_hidden');
        signupForm.classList.remove('form_hidden');
    });

    document.querySelector("#link_login").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove('form_hidden');
        signupForm.classList.add('form_hidden');
    });

    loginForm.addEventListener('submit', e => {
        e.preventDefault();

        //preform
        sendData()
        if (formStatus == 'error') {
            setFormMessage(loginForm, 'error', 'Invalid Password/Username Combination.');
        } else {
            window.location.href = "https://minecraftgoldfish3.github.io/account/sent.html";
            setCookie('accountName');
        }
    })

    document.querySelectorAll('.formElement').forEach(inputElement => {
        inputElement.addEventListener('blur', e => {
            if (e.target.id == '' && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, '');
            };
        });
        inputElement.addEventListener('input', e => {
            clearInputError(inputElement);
        });
    });
});