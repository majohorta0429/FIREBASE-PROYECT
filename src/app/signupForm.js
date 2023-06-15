const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = signupForm['signup-email']
    const password = signupForm['signup-password']

    console.log(email, password)
})