const contact = () => {
    const content = document.querySelector('#content');
    const header = document.createElement('h1');
    const form = document.createElement('form');
    const name = document.createElement('input');
    const phone = document.createElement('input');
    const email = document.createElement('input');
    const comments = document.createElement('textarea');
    const submit = document.createElement('button');

    const submitFunction = () =>{
        const thank = document.createElement('h2')
        form.textContent = '';
        thank.textContent = 'Thank you for your feedback!'
        content.style.cssText = 'align-items: center'
        content.appendChild(thank)
    }

    content.style.cssText = 'width: 700px; height: 800px; top: 50%;\
    align-items: flex-start; justify-content: center;'
    header.classList.add('contacth1')

    header.textContent = 'Contact';
    submit.textContent = 'Submit'

    name.type = 'text';
    phone.type = 'text';
    email.type = 'text';
    submit.type = 'button'

    name.placeholder = 'Full Name';
    phone.placeholder = 'Phone Number';
    email.placeholder = 'Email';
    comments.placeholder = 'Comments';

    name.name = 'fullName';
    phone.name = 'phoneNum';
    email.name = 'email';
    comments.name = 'comments';
    submit.name = 'submit'

    name.required = true;
    phone.required = true;
    email.required = true;
    comments.required = true;

    submit.addEventListener('click', submitFunction)

    content.appendChild(header)
    content.appendChild(form)

    form.appendChild(name)
    form.appendChild(phone)
    form.appendChild(email)
    form.appendChild(comments)
    form.appendChild(submit)


}

export default contact