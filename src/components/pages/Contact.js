import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import '../../styles.css/Contact.css';



export default function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Activates when input field is clicked on
    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;


        // Setting the state of the input type and clearing error messages
        if (inputType === 'name') {
            if (errorMessage) {
                setErrorMessage('')
                }
            setName(inputValue);
        } else if (inputType === 'email') {
            if (errorMessage) {
                setErrorMessage('')
                }
            setEmail(inputValue);
        } else {
            if (errorMessage) {
                setErrorMessage('')
                }
            setMessage(inputValue);
        }
    };
    
    // Activates when input field is click and left blank.
    const handleInputChangeError = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        
        if (inputType === 'name') {
            if (inputValue === '') {
                setErrorMessage('Please input a name.');
                return;
            }
        } else if (inputType === 'email') {
            if (inputValue === '') {
                setErrorMessage('Please input a valid email address.');
                return;
            }
        } else {
            if (inputValue === '') {
                setErrorMessage('Please type a message.');
                return;
            }
        }
    }


    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        if (!name) {
            setErrorMessage('Please input a name.');
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage('Please input a valid email address.');
            return;
        } 

        if (!message) {
            setErrorMessage ('Please type a message.');
            return;
        }
        
        alert(`Hello ${name}, your message has been sent!`);

        // If everything goes according to plan, we want to clear out the input fields after a successful submission.
        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage('');
    };

    return (
        <div className='contactPage'>
            <h1 className="page-title contactTitle">Contact</h1>
        
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