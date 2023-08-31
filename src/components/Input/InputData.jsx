import './InputData.css';

function InputData({dateState, distanceState, handleChangeDate, handleChangeDistance, handleClick}) {
    
    return (
        <form className='input-wrapper'>
            <label>
                <h5 className='title'>Дата (ДД.ММ.ГГ)</h5>
                <input 
                type='text' 
                name='date' 
                value={dateState} 
                onChange={handleChangeDate}/>
            </label>
            <label>
                <h5 className='title'>Пройдено км</h5>
                <input 
                type='text' 
                name='distance' 
                value={distanceState} 
                onChange={handleChangeDistance}/>
            </label>
            <div className='btn-wrapper'>
                <button className='btn' onClick={handleClick}>OK</button>
            </div>
        </form>
    )
}

export default InputData;