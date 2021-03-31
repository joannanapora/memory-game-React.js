import React, {Dispatch, SetStateAction, useState} from 'react';
import './App.scss';
import CardList from './card-list/card-list.component';

const App = () => {

  const [gridColumns, setGridColumns]:[string, Dispatch<SetStateAction<string>>] = useState('grid-container4');
  const [numberOfCards, setNumberOfCards]:[number, Dispatch<SetStateAction<number>>] = useState(16);

  const onSizeChange = (id:string) => {
    if (id === '4') {setGridColumns('grid-container4'); setNumberOfCards(16)}
    if (id === '6') {setGridColumns('grid-container6'); setNumberOfCards(24)}
    if (id === '8') {setGridColumns('grid-container8'); setNumberOfCards(32)}
  };

  return (
    <div className="App">
      <div className='cards'>
      <CardList classOfGrid = {gridColumns} numberOfCards={numberOfCards}/>
        </div>
        <div className='menu'>
        <button onClick={()=>onSizeChange('4')} >16 cards</button>
        <button onClick={()=>onSizeChange('6')} >24 cards</button>
        <button onClick={()=>onSizeChange('8')}> 32 cards</button>
      </div>
    </div>
  );
}

export default App;
