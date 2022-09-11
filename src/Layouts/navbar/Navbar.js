import { useState } from 'react';
import { HiOutlineSearch, HiOutlineUser, HiOutlineShoppingBag, HiOutlineChevronDown } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import SearchBar from '../../Components/search_bar/SearchBar';

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [searchIsClicked, setSearchIsClicked] = useState(false);

    if(searchIsClicked) {
        let header = document.querySelector(".header .head");
        header.style.display="none";
    }

    return (  
        
        <div className="header">
            { searchIsClicked && < SearchBar setSearchIsClicked={setSearchIsClicked}/>}
            
            { !searchIsClicked &&
                <div className="head">
                    <header className='logo-icons'>
                        <Link to='/' className="logo">
                            <img src={require('../../Assets/Images/logo.png')} alt="" />
                        </Link>

                        <div className="icons-container">
                                <button className="search-btn" onClick={ ()=> setSearchIsClicked(true) }>
                                    < HiOutlineSearch  className='icons' size="1.3rem"/>
                                </button>

                                <button className="account-btn">
                                    < HiOutlineUser className='icons' size="1.3rem"/>
                                </button>

                                <Link to='/cart'>
                                    <button className="cart-btn">
                                        < HiOutlineShoppingBag className='icons' size="1.3rem"/>
                                    </button>
                                </Link>
                        </div>
                    </header>
                    <nav className="navbar">
                        <ul>
                            <li className='nav-item'>
                                <Link to='/'>Home</Link>
                            </li> 

                            <li className='nav-item'>
                                <button className="shop-all" onClick={()=> setIsClicked(!isClicked)}>
                                    <span>Shop All Products</span>
                                    < HiOutlineChevronDown className='drop-down-icon' size="0.6rem"/>
                                </button>

                                { isClicked &&
                                    <div className="drop-down-container">
                                        <ul className='drop-down-list'>
                                            <li className="drop-down-item">
                                                <Link to='/edibles'>Edibles</Link>
                                            </li>

                                            <li className="drop-down-item">
                                                <Link to='/topicals'>Topicals</Link>
                                            </li>

                                            <li className="drop-down-item">
                                                <Link to='/cbd-tinctures'>CBD Tinctures</Link>
                                            </li>

                                            <li className="drop-down-item">
                                                <Link to='/pills'>Pills</Link>
                                            </li>
                                        </ul>
                                    </div>
                                }
                            </li>

                            <li className='nav-item'>
                                <a href="#">Wholesale</a>
                            </li>

                            <li className='nav-item'>
                                <a href="#">(352) 600-4008</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            }
        </div>
    );
}
 
export default Navbar;