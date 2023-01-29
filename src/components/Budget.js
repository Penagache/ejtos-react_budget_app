
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency} = useContext(AppContext);

    function handleEvent(value) {

        dispatch({
          type: 'SET_BUDGET',
          payload: value,
        });
    }


    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        style={{ marginLeft: '2rem' , size: 10}}
                        step='10'
                        onChange={(event) => handleEvent(event.target.value)}>
            </input>
        </div>
    );
};

export default Budget;
