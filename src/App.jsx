import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Success from "./pages/Success";
import Product from "./pages/Product";
import Register from "./pages/Register";
import { useSelector } from 'react-redux';
import ProductList from "./pages/ProductList";
import {Switch, Route, BrowserRouter as Router, Redirect} from 'react-router-dom';

const App = () => {
    const user = useSelector((state) => state.user.currentUser);
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/products'>
                    <ProductList/>
                </Route>
                <Route path='/product/:id'>
                    <Product/>
                </Route>
                <Route path='/cart'>
                    <Cart/>
                </Route>
                <Route path='/success'>
                    <Success/>
                </Route>
                <Route path='/login'>
                    {user ? <Redirect to="/" /> : <Login />}
                </Route>
                <Route path='/register'>
                    <Register/>
                </Route>
            </Switch>
        </Router>
    )
};

export default App;