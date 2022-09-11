import './App.css';
import Navbar from './Layouts/navbar/Navbar';
import Home from './Pages/home/Home';
import Admin from './Pages/admin/Admin';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './Layouts/footer/Footer';
import ProductDetails from './Pages/productDetails/ProductDetails';
import Cart from './Pages/cart/Cart';
import CheckOut from './Pages/check_out/CheckOut';
import AllProducts from './Pages/all_products/AllProducts';
import EdibleProducts from './Pages/edible_products/EdibleProducts';
import TopicalsProducts from './Pages/topicals_products/TopicalsProducts';
import CBDTincturesProducts from './Pages/cbd-tinctures_products/CBDTincturesProducts';
import PillsProducts from './Pages/pills_products/PillsProducts';


function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path="/cart/checkout">
          <CheckOut />
        </Route>

        <Route path="*">
          <Navbar/>
          <hr />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>

              <Route path="/cart">
                <Cart />
              </Route>
              
              <Route path="/all-products">
                <AllProducts />
              </Route>

              <Route path="/edibles">
                <EdibleProducts />
              </Route>

              <Route path="/topicals">
                <TopicalsProducts />
              </Route>

              <Route path="/cbd-tinctures">
                <CBDTincturesProducts />
              </Route>

              <Route path="/pills">
                <PillsProducts />
              </Route>

              <Route path="/products/:id">
                <ProductDetails />
              </Route>

              <Route exact path="/admin">
                <Admin/>
              </Route>

            </Switch>
          </div>
          <Footer />
        </Route>

        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
