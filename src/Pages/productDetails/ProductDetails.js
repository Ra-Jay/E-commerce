import { RiFacebookBoxFill, RiTwitterFill, RiPinterestFill } from "react-icons/ri";
import { CgArrowLongLeft } from "react-icons/cg";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { useState } from "react";

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const {id} = useParams();
    const product = useFetch('http://localhost:8000/products/'+id);
    
    function addToCart(){
        const prodObj = {
            "name": product.name,
            "image": product.image,
            "price": product.price,
            "quantity": quantity,
            "id": id
        }

        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(prodObj)
        }).then( ()=> {
            console.log(prodObj);
        })
    }

    return ( 
        <div className="product-container">
            <div className="product-details">
                {product && 
                <>
                <div className="image-section">
                    <img src={product.image} alt="product-image" />
                </div>
                
                <div className="product-info">
                    <h1 className="product-name">{product.name}</h1>
                    <p className="mnp">MIRACLE NUTRITIONAL PRODUCTS</p>
                    <h2 className="product-price">${product.price}</h2>
                    <div className="quantity-container">
                        <p className="quantity">Quantity</p>
                        <input type="number" name="quantity"  min="1" pattern="[0-9]*" onChange={(e)=> setQuantity(e.target.value)}/>
                    </div>
                    <button className="add-cart-btn" onClick={addToCart}>ADD TO CART</button>
                    <button className="buy-now-btn">BUY IT NOW</button>
                    <p className="product-description">{product.desc}</p>
                    
                    <ul className="sm-links">
                        <li className="fb">
                            <RiFacebookBoxFill className="fb-icon"/>
                            <span>SHARE</span>
                        </li>
                        <li className="twitter">
                            <RiTwitterFill className="twitter-icon"/>
                            <span>TWEET</span>
                        </li>
                        <li className="pinterest">
                            <RiPinterestFill className="pinterest-icon"/>
                            <span>PIN IT</span>
                        </li>
                    </ul>
                </div>
                </>
                }
            </div>

            <div className="related-section">
                <h1 className="title">YOU MAY ALSO LIKE</h1>

                <ul>
                    <li className="similar-products">
                        <a href="">
                            {
                            product && 
                            <div className="similar-prod">
                                <img src={product.image} alt="" />
                                <h1>{product.name}</h1>
                                <h1>${product.price}</h1>
                            </div>
                            }
                        </a>
                    </li>
                    <li className="similar-products">
                        <a href="">
                            {
                            product && 
                            <div className="similar-prod">
                                <img src={product.image} alt="" />
                                <h1>{product.name}</h1>
                                <h1>${product.price}</h1>
                            </div>
                            }
                        </a>
                    </li>
                    <li className="similar-products">
                        <a href="">
                            {
                            product && 
                            <div className="similar-prod">
                                <img src={product.image} alt="" />
                                <h1>{product.name}</h1>
                                <h1>${product.price}</h1>
                            </div>
                            }
                        </a>
                    </li>
                    <li className="similar-products">
                        <a href="">
                            {
                            product && 
                            <div className="similar-prod">
                                <img src={product.image} alt="" />
                                <h1>{product.name}</h1>
                                <h1>${product.price}</h1>
                            </div>
                            }
                        </a>
                    </li>
                </ul>
            </div>

            <div className="back-btn">
                <a href="" className="back-home">
                    <div className="return-to-featured">
                        < CgArrowLongLeft className="back-arrow"/>
                        <span>BACK TO FEATURED PRODUCTS</span>
                    </div>
                </a>
            </div>
        </div>
     );
}
 
export default ProductDetails;