import './ItemOutput.css';
import icon from './delete.png';

function ItemOutput({date, distance, handleClickDelete}) {
    return (
        <li className='item-list' onClick={handleClickDelete}>
            <div className='date'>{date}</div>
            <div className='distance'>{distance}</div>
            <div className='act'>
                <img src={icon} alt='icon' className='img'/>
            </div>
        </li>
    )
}

export default ItemOutput;