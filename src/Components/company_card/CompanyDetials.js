const CompanyDetails = () => {
    return ( 
        <div className="company-section">
            <h1 className="title">FROM OUR PLANT TO YOU!</h1>
            <div className="details">
                <div className="company-details info">
                    <img src={require('../../Assets/Images/Our Company.jpg')} alt="" className="our-company-image" />
                    <h1 className="detail-title">Our Company</h1>
                    <p className="detail-summary">Based in Florida, we offer you quality products at affordable prices.</p>
                </div>

                <div className="product-details info">
                    <img src={require('../../Assets/Images/Our Products.jpg')}  alt="" className="our-products-image" />
                    <h1 className="detail-title">Our Products</h1>
                    <p className="detail-summary">GMP compliant facilities and thirs party testing provides you with trusted products.</p>
                </div>

                <div className="promise-details info">
                    <img src={require('../../Assets/Images/Our Promise.jpg')}  alt="" className="our-promise-image" />
                    <h1 className="detail-title">Our Pormise</h1>
                    <p className="detail-summary">You can rely on quality products carefully prepared and shipped right to your home.</p>
                </div>

            </div>
        </div>
     );
}
 
export default CompanyDetails;