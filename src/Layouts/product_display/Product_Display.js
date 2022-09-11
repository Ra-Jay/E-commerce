
import { Link } from 'react-router-dom';

const ProductDisplay = ({data}) => {

    return ( 
        <div className="products-container">
            {data && data.map((product)=> (
                <div className="product-preview" key={product.id}>
                    <Link to={`/products/${product.id}`}>
                        <img src={product.image} alt="" />
                        <div className="product-info">
                            <h2 className="porduct-name">{product.name}</h2>
                            <p className="product-desc">MIRACLE NUTRITIONAL PRODUCTS</p>
                            <h2 className="product-price">${product.price}</h2>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default ProductDisplay;