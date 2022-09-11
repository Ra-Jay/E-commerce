import { useState } from 'react';
import useFetch from '../../Hooks/useFetch';
import ProductDisplay from '../../Layouts/product_display/Product_Display';

const TopicalsProducts = () => {
    const data = useFetch('http://localhost:8000/products');
    const [filter, setFilter] = useState("All Products");
    // const [displayAll, setDisplayAll]= useState(true);

    if(filter === 'All Products'){
        setFilter('Topicals');
    }
    return ( 
        <div className="all-products-container">
        <h1 className="title featured-title">Topicals</h1>
        <hr />
        <div className="filter-sort-bar">
            <div className='filter-sort'>
                <div className="filter">
                    <label>FILTER BY</label>
                    <select 
                    id="filter"
                    value={filter}
                    onChange={(e)=> setFilter(e.target.value)}
                    >
                        <option value="All Products">All Products</option>
                        <option value="Topicals">Topicals</option>
                        <option value="Anti-inflammatory">Anti-inflammatory</option>
                        <option value="Pain relief">Pain relief</option>
                    </select>
                </div>
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
            {data && filter && <ProductDisplay data={data.filter((product)=> product.subCategory.includes(filter))} />}
        </div>
    </div> 
     );
}
 
export default TopicalsProducts;