
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
        <div className='alert alert-secondary' style={{height:'60px'}}>
             <label for="budget">Budget: {currency} </label>
            <input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        style={{ marginLeft: '2rem' , size: 10, width:110}}
                        step='10'
                        onChange={(event) => handleEvent(event.target.value)}>
            </input>
        </div>
    );
};

export default Budget;
