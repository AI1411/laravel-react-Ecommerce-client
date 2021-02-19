import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Users from "./pages/Users";
import UserCreate from "./pages/UserCreate";
import Top from "./pages/Top";
import ProductDetail from "./pages/products/ProductDetail";
import Products from './pages/products/Products';
import ShoppingCart from "./pages/cart/ShoppingCart";
import CategoryProducts from "./pages/categories/CategoryProducts";
import PurchaseHistory from "./pages/histories/PurchaseHistory";
import Favorites from "./pages/favorites/Favorites";
import Profile from "./pages/users/Profile";
import Dashboard from "./pages/Admin/dashboard/Dashboard";
import AdminProducts from "./pages/Admin/products/AdminProducts";
import AdminUsers from './pages/Admin/users/AdminUsers';
import AdminCategories from "./pages/Admin/categories/AdminCategories";
import AdminMainCategories from "./pages/Admin/main_categories/AdminMainCategories";
import AdminCreateProduct from "./pages/Admin/products/AdminCreateProduct";
import AdminCrateUser from "./pages/Admin/users/AdminCrateUser";

const App = () => {
    return (
        <Router>
            <Switch>
                {/*表面*/}
                <Route path="/" component={Top} exact/>
                <Route path="/users" component={Users} exact/>
                <Route path="/users_create" component={UserCreate} exact/>
                <Route path="/products/:id" component={ProductDetail} exact/>
                <Route path="/products" component={Products} exact/>
                <Route path="/category/:slug/products" component={CategoryProducts} exact/>
                <Route path="/cart" component={ShoppingCart} exact/>
                <Route path="/history" component={PurchaseHistory} exact/>
                <Route path="/favorites" component={Favorites} exact/>
                <Route path="/profile" component={Profile} exact/>
                {/*管理画面*/}
                <Route path="/admin/dashboard" component={Dashboard} exact/>
                <Route path="/admin/products" component={AdminProducts} exact/>
                <Route path="/admin/products/create" component={AdminCreateProduct} exact/>
                <Route path="/admin/users" component={AdminUsers} exact/>
                <Route path="/admin/users/create" component={AdminCrateUser} exact/>
                <Route path="/admin/main_categories" component={AdminMainCategories} exact/>
                <Route path="/admin/categories" component={AdminCategories} exact/>
            </Switch>
        </Router>
    );
}

export default App;
