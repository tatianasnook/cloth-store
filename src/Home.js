
import Clothes from './Clothes';
import Buttons from './Buttons';
import { data } from './data';
import { useState } from 'react';

function Home() {
  const [clothes, setClothes] = useState(data)

  return (
    <div>
      <div className='cont'>
        <h2 className='back'>Free Standard Shipping</h2>
      </div>
      <Buttons 
        data={data}
        setClothes={setClothes}
        />
      <Clothes itemsForSale={clothes}/>
    </div>
  )
}

export default Home;