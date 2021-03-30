import React, {useState} from 'react';
import './card.component.scss'

const Card = () => {

    const[isFlipped, setIsFlipped] = useState(false);

    const toggleClass = () => {
        setIsFlipped(!isFlipped);
      };

    return (
        <div  onClick={toggleClass} className='card'>
    <div className={ isFlipped ? 'card-inner-flipped' : 'card-inner'}>
        <div className='card-face card-face-front' >
        <h3>
            MEM0RY
        </h3>
        </div>
        <div className='card-face card-face-back' >
            <div className='card-content'>
                <div className='card-header' >
                HEJ ADA ZROBILAM KARTE
                <h2>MEMORY GAME</h2>
            </div>
            <div className='card-body'>
            <h3 >THIS IS BACK OF THE CARD</h3>
            <p>:)</p>
            </div>
        </div>
        </div>
    </div>
    </div>
    )

}

export default Card;