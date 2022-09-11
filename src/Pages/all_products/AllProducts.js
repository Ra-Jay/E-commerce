import { useState } from 'react';
import useFetch from '../../Hooks/useFetch';
import ProductDisplay from '../../Layouts/product_display/Product_Display';

const AllProducts = () => {
    const data = useFetch('http://localhost:8000/products');
    const [filter, setFilter] = useState("All Products");
    const [displayAll, setDisplayAll]= useState(true);

    console.log(filter);

    if(filter === "All Products"){
        setFilter('');
        setDisplayAll(true);
    }
    //  else {
    //     setFilter('');
    //     setDisplayAll(false);
    // }
    return ( 
        <div className="all-products-container">
            <h1 className="title featured-title">Featured Products</h1>
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
                            <option value="Anti-inflammatory">Anti-inflammatory</option>
                            <option value="CBD Pills">CBD Pills</option>
                            <option value="Edibles">Edibles</option>
                            <option value="Energy">Energy</option>
                            <option value="Gummies">Gummies</option>
                            <option value="Infused">Infused</option>
                            <option value="Non-Cannabis">Non-Cannabis</option>
                            <option value="Pain relief">Pain Relief</option>
                            <option value="Pills">Pills</option>
                            <option value="Tinctures">Tinctures</option>
                            <option value="Top Sellers">Top Sellers</option>
                            <option value="Topicals">Topicals</option>
                            <option value="Vegan">Vegan</option>
                            <option value="Vitamin">Vitamin</option>
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
                {data && displayAll && <ProductDisplay data={data} />}
                {data && filter && <ProductDisplay data={data.filter((product)=> product.subCategory.includes(filter))} />}
            </div>
        </div> 
    );
}
 
export default AllProducts;