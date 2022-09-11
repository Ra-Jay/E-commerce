import { HiOutlineSearch, HiX } from 'react-icons/hi';

const SearchBar = ({setSearchIsClicked}) => {

    return ( 
        <div className="search-section">
            <input type="text" className="search-bar" placeholder='Search'/>
            <button className="search-btn ">
                < HiOutlineSearch size="1.3rem" className='button'/>
            </button>

            <button className="exit-btn" onClick={()=> setSearchIsClicked(false)}>
                < HiX size="1.3rem" className='button'/>
            </button>
        </div>
     );
}
 
export default SearchBar;