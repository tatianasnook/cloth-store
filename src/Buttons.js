
function Buttons({data, setClothes}) {

  const filteredClothes = (searchTerm) => {
    const filteredResult = [];

    data.forEach((item) => {
      // Check if searchTerm is present in item.searchTerm
      if (
        (typeof item.searchTerm === 'string' && item.searchTerm === searchTerm) ||
        (Array.isArray(item.searchTerm) && item.searchTerm.includes(searchTerm))
      ) {
        filteredResult.push(item);
      }
    });

    // Update the state outside the loop to avoid unnecessary re-renders
    setClothes(filteredResult);
  };

  return (
    <div className="cont">
      <button className='change' onClick={() => setClothes(data)}>All</button>
      <button className="change" onClick={() => filteredClothes("dress")}>Dresses</button>
      <button className="change" onClick={() => filteredClothes("skirt")}>Skirts</button>
      <button className="change" onClick={() => filteredClothes("pants")}>Pants</button>
      <button className="change" onClick={() => filteredClothes("shoes")}>Shoes</button>
      <button className="change" onClick={() => filteredClothes("shirt")}>Shirts</button>
    </div>
  )
}

export default Buttons;