
import Clothes from './Clothes';
import Buttons from './Buttons';
import { data } from './data';
import { useState } from 'react';

function Home() {
  const [clothes, setClothes] = useState(data)

  const chosenClothes = (searchTerm) => {
    const newClothes = data.filter(element => element.searchTerm === searchTerm)
    setClothes(newClothes)
  }

  return (
    <div>
      <div className='cont'>
        <h2 className='back'>Free Standard Shipping</h2>
      </div>
      <Buttons 
        data={data}
        filteredClothes={chosenClothes}
        setClothes={setClothes}
      />
      <Clothes itemsForSale={clothes}/>
    </div>
  )
}

export default Home;