import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const CheckOut = () => {
    return ( 
        <div className="checkout-section">
            <div className="shipping-details">
                <div className="header-section">
                    <img src={require('../../Assets/Images/logo.png')} alt="" />
                    <div className="checkout-nav">
                        <ul>
                            <li className="item">
                                <span>cart</span>
                                <MdOutlineKeyboardArrowRight/>
                            </li>
                            <li className="item">
                                <span>information</span>
                                <MdOutlineKeyboardArrowRight/>
                            </li>
                            <li className="item">
                                <span>shipping</span>
                                <MdOutlineKeyboardArrowRight/>
                            </li>
                            <li className="item">
                                <span>payment</span>
                                <MdOutlineKeyboardArrowRight/>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="contact-details">
                    <div className="top-section">
                        <h2>Contact Information</h2>
                        <span>Already have an account?</span>
                        <a href="">Log in</a>
                    </div>

                    <input type="checkbox" className="email"/>

                    <div className="lower-section">
                        <input type="checkbox" />
                        <p>Email me with news and offers</p>
                    </div>
                </div>

                <div className="shipping-address"></div>
            </div>

            <div className="prod-amount"></div>
        </div>
     );
}
 
export default CheckOut;