const Footer = () => {
    return (  
        <div className="footer">
            <div className="flex-section">
                <div className="quickLinks">
                    <h1 className="footer-title">Quick Links</h1>
                    <ul className="link-list">
                        <li className="link"><a href="">About Us</a></li>
                        <li className="link"><a href="">Contact Us</a></li>
                        <li className="link"><a href="">FAQ's</a></li>
                        <li className="link"><a href="">Policies</a></li>
                        <li className="link"><a href="">Do not sell my personal information</a></li>
                    </ul>
                </div>

                <div className="subscribe">
                    <h1 className="footer-title">Get Discounts & New Product Alerts</h1>
                    <div className="subscribe-now">
                        <input type="text" placeholder="Email address"/>
                        <button className="subscribe-btn"><strong>SUBSCRIBE</strong></button>
                    </div>
                </div>

                <div className="disclaimer">
                    <p><strong>*These statements have not been evaluated by the Food and Drug Administration.  These products are not intended to diagnose, teat, cure or prevent any disease.  </strong></p>
                </div>
            </div>
            <p className="copyright">© 2022, <a href="">Miracle Nutritional Products</a> <a href="">Powered by Shopify</a></p>
        </div>
    );
}
 
export default Footer;