import { useState } from 'react';
import './App.css';

import InputData from './components/Input/InputData';
import ItemOutput from './components/ItemList/ItemOutput';

function App() {
  const [dateState, setDate] = useState('');
  const [distanceState, setDistance] = useState('');
  const [arrState, setArr] = useState([]);

  const handleChange = (event) => {
    event.target.name === 'date' ? setDate(event.target.value) : setDistance(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault();
    setArr((arrState) => [...arrState, { date: dateState, distance: distanceState, id: Math.random() }])
  }

  const handleRemove = (id) => {
    const newArrState = arrState.filter((item) => item.id !== id);
    setArr(newArrState)
  }

  arrState.sort((a, b) => new Date(b.date) - new Date(a.date))

  console.log(arrState)

  return (
    <div className='container'>
      <InputData
        dateState={dateState}
        distanceState={distanceState}
        handleChangeDate={handleChange}
        handleChangeDistance={handleChange}
        handleClick={handleClick}
      />
      <div className='items-list-wrapper'>
        {arrState.map(item => <ItemOutput date={item.date} distance={item.distance} key={item.id} handleRemove={() => handleRemove(item.id)} />)}
      </div>
    </div>
  );
}

export default App;
