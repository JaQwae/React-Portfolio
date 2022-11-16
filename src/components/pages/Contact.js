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
            setName(inputValue)
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

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
    };

    return (
        <div>
            <h1>Contact</h1>
        
            <form className="form">
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="name"
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                />
                <input className='messageInput'
                    value={message}
                    name= "message"
                    onChange = {handleInputChange}
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