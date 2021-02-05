import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import setUserData from '../actions/setUserData';




function Account() {

    const [buttonText, setButtonText] = useState('Sign me up!')
    const [pageTitle, setPageTitle] = useState('Registrera dig för ett konto')


    const history = useHistory();
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        let name = e.target[0];
        let email = e.target[1];
        let password = e.target[2];
        if (buttonText === 'Sign me up!') {
            console.log(e)
            name.style.pointerEvents = 'none'
            email.style.pointerEvents = 'none'
            password.style.pointerEvents = 'none'
            name.style.border = '0'
            email.style.border = '0'
            password.style.border = '0'
            dispatch(setUserData(name.value, email.value, password.value))
            setButtonText('Ändra')
            setPageTitle('Ditt konto')
            history.push('/account')

        }
        if (buttonText === 'Ändra') {
            name.style.pointerEvents = 'auto'
            email.style.pointerEvents = 'auto'
            password.style.pointerEvents = 'auto'
            name.style.border = '2px solid black'
            email.style.border = '2px solid black'
            password.style.border = '2px solid black'
            setButtonText('Spara')
        }

        if (buttonText === 'Spara') {
            name.style.pointerEvents = 'none'
            email.style.pointerEvents = 'none'
            password.style.pointerEvents = 'none'
            name.style.border = '0'
            email.style.border = '0'
            password.style.border = '0'
            dispatch(setUserData(name.value, email.value, password.value))
            setButtonText('Ändra')
        }
    }



    return (
        <div className='account-container'>
            <h3> {pageTitle}</h3>
            <form className='sign-in-form' onSubmit={handleSubmit} >
                <div className='form-container'>
                    <div>
                        <label>NAME</label>
                        <input type="text" id='name' required />
                    </div>
                    <div>
                        <label >EMAIL</label>
                        <input type="email" id='email' required />
                    </div>
                    <div>
                        <label >PASSWORD</label>
                        <input type="password" id='password' required />
                    </div>
                    <div className='input-submit'>
                        <input type='submit' onSubmit={handleSubmit} value={buttonText} />
                    </div>

                </div>

            </form>

        </div >
    );
}

export default Account;


