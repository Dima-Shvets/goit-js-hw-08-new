import throttle from 'lodash.throttle'

import refs from '../refferences/refs'

refs.feedbackForm.addEventListener('input', throttle(onFormInputChange, 500))

function onFormInputChange(e) {
    const inputsValues = {
        email: '',
        message: '',
    }
    if (e.currentTarget.elements.email.value) {
        inputsValues.email = e.currentTarget.elements.email.value;
    }

    localStorage.setItem('feedback-form-state', JSON.stringify(inputsValues))
}

const s = {
    message: 'dkkdd',
}
localStorage.setItem('feedback-form-state', JSON.stringify(s))