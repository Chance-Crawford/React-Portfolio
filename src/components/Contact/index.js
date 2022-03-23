import React, { useState } from 'react';

function Contact(){

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState

    // check this state to see if there is currently an error with
    // input validation.
    const [error, setError] = useState('');


    // validates the email
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // syncs the user input to the state whenever the input is valid
    function handleChange(e){
        if(e.target.name === 'email'){
            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setError('Your email is invalid.');
            } else {
                setError('');
            }
        }
        else{
            // if any of the other input fields are empty
            if (!e.target.value.length) {
                setError(`${e.target.name} is required.`);
            } else {
                // this would usually not be the best solution because the error
                // state can get reset even if other validation like the email
                // is invalid. However for a portfolio contact me, this is alright.
                setError('');
            }
        }

        if(!error){
            // the handleChange function is only called when a user clicks off 
            // of an input element. This gets the name of the input field
            // and then finds the property in the state, and resets the value
            // to the current value of the input field.
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }

    }

    console.log(formState);

    function handleSubmit(e){
        e.preventDefault();
        console.log(formState);
    }

    return(
        <section className="p-5 w-100">
            <div>
                <h2 className="sub-font">Contact Me</h2>
                <form id="contact" className="w-25" onSubmit={handleSubmit}>
                    <div className=" d-flex flex-wrap w-100">
                        <div className="w-100">
                            <label htmlFor="name" className="w-100 text m-0">Name:</label>
                            {/* onBlur triggers whenever user clicks off of input field and
                            it loses focus */}
                            <input defaultValue={name} onBlur={handleChange} type="text" name="name" className="w-75 p-2"/>
                        </div>
                        <div className="w-100">
                            <label htmlFor="email" className="w-100 text m-0 mt-2">Email:</label>
                            <input type="email" defaultValue={email} onBlur={handleChange} name="email" className="w-75 p-2"/>
                        </div>
                        <div className="w-100">
                            <label htmlFor="message" className="w-100 text m-0 mt-2">Message:</label>
                            <textarea type="text" defaultValue={message} onBlur={handleChange} rows="5" name="message" className="w-100 p-2"/>
                        </div>
                        {/* if error state is truthy, show error message */}
                        {error && (
                            <div className='w-100'>
                                <p className="text m-0 w-100">{error}</p>
                            </div>
                        )}
                        <div className=''>
                            <button type="submit" className="btn text project-btn m-0 mt-3">Submit</button>
                        </div>
                        
                    </div>
                    
                </form>
            </div>
        </section>
    );
}

export default Contact;