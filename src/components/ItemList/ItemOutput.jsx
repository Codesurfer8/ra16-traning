import './ItemOutput.css';
import icon from './delete.png';

function ItemOutput({date, distance, handleRemove}) {
    return (
        <li className='item-list'>
            <div className='date'>{date}</div>
            <div className='distance'>{distance}</div>
            <div className='act' onClick={handleRemove}>
                <img src={icon} alt='icon' className='img'/>
            </div>
        </li>
    )
}

export default ItemOutput;