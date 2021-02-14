import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './layouts/Navnar';
import Users from "./pages/Users";
import UserCreate from "./pages/UserCreate";
import Top from "./pages/Top";
import ProductDetail from "./pages/products/ProductDetail";
import Products from './pages/products/Products';
import ShoppingCart from "./pages/cart/ShoppingCart";
import CategoryProducts from "./pages/categories/CategoryProducts";
import PurchaseHistory from "./pages/histories/PurchaseHistory";
import Favorites from "./pages/favorites/Favorites";

const App = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" component={Top} exact/>
                <Route path="/users" component={Users} exact/>
                <Route path="/users_create" component={UserCreate} exact/>
                <Route path="/products/:id" component={ProductDetail} exact/>
                <Route path="/products" component={Products} exact/>
                <Route path="/category/:slug/products" component={CategoryProducts} exact/>
                <Route path="/cart" component={ShoppingCart} exact/>
                <Route path="/history" component={PurchaseHistory} exact/>
                <Route path="/favorites" component={Favorites} exact/>
            </Switch>
        </Router>
    );
}

export default App;
