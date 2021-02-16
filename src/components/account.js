import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import setUserData from '../actions/setUserData';
import { useSelector } from 'react-redux'




function Account() {

    const [buttonText, setButtonText] = useState('Sign me up!')
    const [pageTitle, setPageTitle] = useState('Registrera dig för ett konto')
    const [inputClass, setInputClass] = useState('input-normal')
    const [classForDataFromState, setClassForDataFromState] = useState('dataFromState')

    

    const history = useHistory();
    const dispatch = useDispatch();
    const state = useSelector((state) => {
        console.log(state)
        return state
    })

    function handleSubmit(e) {
        e.preventDefault();
        let name = e.target[0].value;
        let email = e.target[1].value;
        let password = e.target[2].value;


        if (name.indexOf(' ') === -1 && email.indexOf(' ') === -1 && password.indexOf(' ') === -1) {

            if (buttonText === 'Sign me up!') {
                setInputClass('input-custom')
                dispatch(setUserData(name, email, password))
                setButtonText('Ändra')
                setPageTitle('Ditt konto')
                history.push('/account')
                setClassForDataFromState('dataFromState-custom')
            }

            if (buttonText === 'Ändra') {
                setInputClass('input-normal')
                setButtonText('Spara')
                setClassForDataFromState('dataFromState')

            }

            if (buttonText === 'Spara') {
                setInputClass('input-custom')
                dispatch(setUserData(name, email, password))
                setButtonText('Ändra')
                setClassForDataFromState('dataFromState-custom')
            }

        } else alert('Du får inte skriva mellanslag som inmatning')
    }



    return (
        <div className='account-container'>
            <h3> {pageTitle}</h3>
            <form className='sign-in-form' onSubmit={handleSubmit} >
                <label>NAME</label>
                <input type='text' className={inputClass} id='name' required />
                <h2 className={classForDataFromState}> {state.name}</h2>

                <label >EMAIL</label>
                <input type='email' className={inputClass} id='email' required />
                <h2 className={classForDataFromState}> {state.email}</h2>

                <label >PASSWORD</label>
                <input type="password" className={inputClass} id='password' required />
                <h2 className={classForDataFromState} id='password'> {state.password}</h2>

                <input type='submit' onSubmit={handleSubmit} value={buttonText} />


            </form>

        </div >
    );
}

export default Account;


