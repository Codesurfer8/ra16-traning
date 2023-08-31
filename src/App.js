import { useState } from 'react';
import './App.css';

import InputData from './components/Input/InputData';
import ItemOutput from './components/ItemList/ItemOutput';

function App() {
  const [dateState, setDate] = useState('');
  const [distanceState, setDistance] = useState('');
  const [arrState, setArr] = useState([]);

  const handleChange = (event) => {
    return event.target.name === 'date' ? setDate(event.target.value) : setDistance(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault();
    setArr((arrState) => [...arrState, {date: dateState, distance: distanceState, id: Math.random()}])
    console.log(arrState)
  }

  const handleClickDelete = (event) => {
    event.preventDefault();
    console.log(event.target)
  }

  return (
    <div className='container'>
      <InputData
        dateState={dateState}
        distanceState={distanceState}
        handleChangeDate={handleChange}
        handleChangeDistance={handleChange}
        handleClick={handleClick}
      />
      <div>
        { arrState.map(item => <ItemOutput date={item.date} distance={item.distance} key={item.id} handleClickDelete={handleClickDelete}/>)}
      </div>
    </div>
  );
}

export default App;
