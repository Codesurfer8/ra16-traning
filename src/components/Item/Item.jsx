import React from 'react';
import PropTypes from 'prop-types';
import icon from '../Item/delete.png';

function Item({ date, km, onDeleteNote, id, }) {
  const formattedDate = date

  return (
    <div className="item">
      <div className="item-date">{formattedDate}</div>
      <div className="item-km">{km}</div>
      <div className="item-buttons-block">
        <div className="item-del material-icons" onClick={() => onDeleteNote(id)}>
          <img className='icon' src={icon} alt='' />
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  date: PropTypes.string.isRequired,
  km: PropTypes.number.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Item;