import { useState } from 'react'
import './CartPosition.scss'


export default function CartPosition(props) {
    let [num, setNum] = useState(0);

    function toBoost () {
        setNum(++num);
    }
    function toReduce () {
        if (num > 0) {
            setNum(--num);
        }
    }

  return (
    <div className='full'>
      <div className="position_container">

        <img src={props.pic} alt="" />

        <div className="info">
            <div className="properties">
                <p className="name">{props.positionName}</p>
                <p className="weight">{props.weight}g</p>
                <p className="price">{props.price}₽</p>
            </div>

            <div className="volume">
                <button onClick={toReduce} className='minus'>-</button>
                <p className="num">{num}</p>
                <button onClick={ toBoost} className="plus">+</button>
            </div>


        </div>
      </div>
    </div>
  )
}
