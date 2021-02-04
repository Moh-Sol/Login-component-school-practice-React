import React from 'react';
import { useHistory } from 'react-router-dom';

function Account(props) {


    const history = useHistory();

    return (
        <div>
            <h2> Test Form </h2>
            <input type='submit' onClick={() => history.push('/account')} value='Sign me up!'/>
        </div>
    );
}

export default Account;