import { Link } from 'react-router-dom';

function Clothes({itemsForSale}) {
  return (
    <div className="products">
      {itemsForSale.map(element => {
        const {id, name, searchTerm, price, image} = element
        return (
          <div key={id} className="product-card">
            <Link to={`/about/${element.title}`}>
              <img src={image} alt={name} className="productImg"/>
            </Link>
            
            <div className="product-info">
              <h3>{name}</h3>
              <h4>$ {price}</h4>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Clothes;