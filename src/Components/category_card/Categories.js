import { Link } from 'react-router-dom';

const Categories = () => {
    return ( 
        <div className="category-card">
            <h1 className="title">SHOP BY CATEGORY</h1>
            <div className="categories">
                <Link to='/edibles' className="edible">
                    <div className="category-item">
                        <h1 className="category-name">Edibles</h1>
                    </div>
                </Link>

                <Link to='/topicals'className="topicals">
                    <div className="category-item">
                        <h1 className="category-name">Topicals</h1>
                    </div>
                </Link>
                
                <Link to='/cbd-tinctures' className="cbd-tinctures">
                    <div className="category-item">
                        <h1 className="category-name">CBD Tinctures</h1>
                    </div>
                </Link>

                <Link to='/pills' className="pills">
                    <div className="category-item">
                        <h1 className="category-name">Pill</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
}
 
export default Categories;