import Categories from '../../Components/category_card/Categories';
import CompanyDetails from '../../Components/company_card/CompanyDetials';
import useFetch from '../../Hooks/useFetch';
import { Link } from 'react-router-dom';
import ProductDisplay from '../../Layouts/product_display/Product_Display';

const Home = () => {
    const data = useFetch('http://localhost:8000/products');
  
    return (  
        <div className="home">
            {data && <ProductDisplay data={data.filter((product)=> product.subCategory.includes('featured'))} />}
            <Link to='all-products'><button className="view-all-btn"><h1>VIEW ALL</h1></button></Link>

            <Categories />
            <CompanyDetails />

        </div>
    );
}
 
export default Home;