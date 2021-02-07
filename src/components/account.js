import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import setUserData from '../actions/setUserData';




function Account() {

    const [buttonText, setButtonText] = useState('Sign me up!')
    const [pageTitle, setPageTitle] = useState('Registrera dig för ett konto')
    const [inputClass, setInputClass] = useState('input-normal')


    const history = useHistory();
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        // if (e.target[0].value.trim() && e.target[1].value.trim() && e.target[2].value.trim()) {
        //     if (name.indexOf(' ') == -1) {
        //         console.log('there is no  white space')
        //     } else   console.log('you can not have a white space')





        let name = e.target[0].value;
        let email = e.target[1].value;
        let password = e.target[2].value;
        // console.log(e)
        if (name.trim() && name.indexOf(' ') == -1 && email.trim() && email.indexOf(' ') == -1 && password.trim() && password.indexOf(' ') == -1) {

            if (buttonText === 'Sign me up!') {
                setInputClass('input-custom')
                dispatch(setUserData(name, email, password))
                setButtonText('Ändra')
                setPageTitle('Ditt konto')
                history.push('/account')
            }

            if (buttonText === 'Ändra') {
                setInputClass('input-normal')
                setButtonText('Spara')
            }

            if (buttonText === 'Spara') {
                setInputClass('input-custom')
                dispatch(setUserData(name, email, password))
                setButtonText('Ändra')
            }

        } else alert('Du får inte skriva mellanslag som inmatning')
    }



    return (
        <div className='account-container'>
            <h3> {pageTitle}</h3>
            <form className='sign-in-form' onSubmit={handleSubmit} >
                <label>NAME</label>
                <input type="text" className={inputClass} id='name' required />

                <label >EMAIL</label>
                <input type="text" className={inputClass} id='email' required />

                <label >PASSWORD</label>
                <input type="password" className={inputClass} id='password' required />

                <input type='submit' onSubmit={handleSubmit} value={buttonText} />


            </form>

        </div >
    );
}

export default Account;


