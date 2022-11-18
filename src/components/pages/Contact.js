import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import '../../styles.css/Contact.css';



export default function Contact() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        
        // Based on the input type, we set the state of either email, name, and password
        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };
    
    const handleInputChangeError = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            if (inputValue === '') {
                setErrorMessage('Must input a name.');
            }
        } else if (inputType === 'email') {
            if (inputValue === '') {
                setErrorMessage('Please input a valid email.');
            }
        } else {
            if (inputValue === '') {
                setErrorMessage('Please type a message.');
            }
        }
    }

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        if (!name) {
            setErrorMessage('Must input a name.');
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage('Please input a valid email');
            return;
        } 

        if (!message) {
            setErrorMessage ('Please type a message');
            return;
        }
        
        alert(`Hello ${name}, your message has been sent!`);

        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage('');
    };

    return (
        <div className='contactPage'>
            <h1 className="pageTitle contactTitle">Contact</h1>
        
            <form className="form">
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    onBlur={handleInputChangeError}
                    type="text"
                    placeholder="name"
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    onBlur={handleInputChangeError}
                    type="email"
                    placeholder="email"
                />
                <input className='messageInput'
                    value={message}
                    name= "message"
                    onChange={handleInputChange}
                    onBlur={handleInputChangeError}
                    type = "text"
                    placeholder="message"
                />
                <button type="button" className="submitButton" onClick={handleFormSubmit}>Submit</button>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </form>
            
        </div>
    );
}