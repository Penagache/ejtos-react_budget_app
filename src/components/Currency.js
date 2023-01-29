import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    function handleEvent(value) {
        dispatch({
          type: 'CHG_CURRENCY',
          payload: value,
        });
    }

    return (
        <div className='alert alert-success' style={{height:'60px', backgroundColor:'lightgreen'}}>
            <div className="input-group mb-3">
				<select className="custom-select" style={{ marginLeft: '2rem', size:8, width:170}} id="inputGroupSelectCurrency" onChange={(event) => handleEvent(event.target.value)}>
					<option defaultValue value={currency} name="pound">Currency (£ Pound)</option>
					<option value="€" name="euro">Currency (€ Euro)</option>
					<option value="$" name="dollar">Currency ($ Dollar)</option>
					<option value="₹" name="ruppee">Currency (₹ Ruppee)</option>
				</select>
			</div>
        </div>
    );
};

export default Currency;
