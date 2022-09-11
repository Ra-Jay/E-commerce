import { useState } from 'react';
import useFetch from '../../Hooks/useFetch';
import ProductDisplay from '../../Layouts/product_display/Product_Display';

const EdibleProducts = () => {
    const data = useFetch('http://localhost:8000/products');
    const [filter, setFilter] = useState("All Products");
    const [totalProducts, setTotalProducts] = useState(0);
    const [showProducts, setShowProducts] = useState(true);
    // const [displayAll, setDisplayAll]= useState(true);

    if(totalProducts !== 0)
        setShowProducts(false);
        
    return ( 
        <div className="all-products-container">
        <h1 className="title featured-title">CBD Tinctures</h1>
        <hr />
        <div className="filter-sort-bar">
            <div className='filter-sort'>
                <div className="sort">
                    <label>SORT BY</label>
                    <select 
                    name="" 
                    id="sort">
                        <option value="Featured">Featured</option>
                        <option value="Alphabetically A-Z">Alphabetically, A-Z</option>
                        <option value="Alphabetically Z-A">Alphabetically, Z-A</option>
                        <option value="Price, low to high">Price, low to high</option>
                        <option value="Price, high to low">Price, high to low</option>
                        <option value="Date, old to new">Date, old to new</option>
                        <option value="Date, new to old">Date, new to old</option>
                    </select>
                </div>
            </div>
            <p className="product-quantity">36 products</p>
        </div>
        <hr />
        <div className="all-products">
            {showProducts && <div className='no-products'>Sorry, there are no products in this collection</div>}
            {data && filter && <ProductDisplay data={data.filter((product)=> product.subCategory.includes(filter))} />}
        </div>
    </div> 
     );
}
 
export default EdibleProducts;