import { useEffect, useState } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

const Cart = () => {
    const cartProducts = useFetch('http://localhost:5000/cart');

    const [subTotal, setSubTotal] = useState(0);
    // setSubTotal(19);
    useEffect(()=> {
        if(cartProducts)
            setSubTotal(cartProducts.map((prod)=> parseInt(prod.price)+subTotal));
    }, [])

    return ( 
        <div className="cart-container">
            {/* <div className="empty-cart">
                <h1 className="your-cart">Your cart</h1>

                <p className="summary">Your cart is currently empty</p>

                <div className="back-btn">
                    <Link to='/' className="back-home">
                        <div className="return-to-featured">
                            <span>CONTINUE SHOPPING</span>
                            < CgArrowLongRight className="back-arrow"/>
                        </div>
                   </Link>
                </div>
            </div> */}
            <div className="cart-products">
                <div className="cart-header">
                    <h1 className="title">Your cart</h1>
                    <Link to='/'><p className="continue-shopping">Continue shopping</p></Link>
                </div>     

                <div className="view-cart-products">
                    <div className="table-header">
                        <div className="product">PRODUCT</div>
                        <div className="price">PRICE</div>
                        <div className="quantity">QUANTITY</div>
                        <div className="total">TOTAL</div>
                    </div>

                    {cartProducts && cartProducts.map((product)=> (
                    <div className="table-data" key={product.id}>
                        <div className="prod-details">
                            <img src={product.image} alt="" />
                            <div className="flex-parent">
                                <div className="flex-prod">
                                    <div className="prod-name">{product.name}</div>
                                    <p className="remove">Remove</p>
                                </div>
                            </div>
                        </div>
                        <div className="prod price">${product.price}</div>
                        <div className="prod-quantity">{product.quantity}</div>
                        {/* <input 
                            type="text" 
                            className="total" 
                            value={Math.round((product.price * product.quantity) * 100)/100}
                            onChange={(e)=>setSubTotal(subTotal+(e.target.value))}
                        /> */}
                        <div className="total">${Math.round((product.price * product.quantity) * 100)/100}</div>
                    </div>
                    ))}

                    <div className="checkout-now">
                        {/* <div className="sub-total"> */}
                        <span className="st-title">Subtotal</span>
                        {/* <span className="st-amount">$94.00 USD </span> */}
                        <span>{subTotal} USD</span>
                        {/* </div> */}
                        <p>Taxes and shipping calculated at checkout</p>
                        <Link to='/cart/checkout'><button className="checkout-btn">CHECK OUT</button></Link>   
                    </div>
                </div>    
            </div>
        </div>
     );
}
 
export default Cart;