import '../style/App.scss'
import CartPosition from './CartPosition/CartPosition'
import pic1 from '../assets/fries.png'
import pic2 from '../assets/hotdog.png'
import pic3 from '../assets/onion.png'

function App() {

  const arr = [
    {
      pic: pic1,
      positionName: 'French fries',
      weight: 200,
      price: 250,
    },
    {
      pic: pic2,
      positionName: 'Hot dog',
      weight: 250,
      price: 300,
    },
    {
      pic: pic3,
      positionName: 'Onion rings',
      weight: 150,
      price: 200,
    },
  ]

  return (
    <div className='mainDiv'>
      {arr.map((item) => {
        return <CartPosition {...item}/>
      })}
    </div>
  )
}

export default App
