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
import AdminCreateCategory from "./pages/Admin/categories/AdminCreateCategory";
import AdminCreateMainCategory from "./pages/Admin/main_categories/AdminCreateMainCategory";
import AdminCategoryEdit from "./pages/Admin/categories/AdminCategoryEdit";
import AdminMainCategoryEdit from "./pages/Admin/main_categories/AdminMainCategoryEdit";

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
                {/*Product*/}
                <Route path="/admin/products" component={AdminProducts} exact/>
                <Route path="/admin/products/create" component={AdminCreateProduct} exact/>
                {/*User*/}
                <Route path="/admin/users" component={AdminUsers} exact/>
                <Route path="/admin/users/create" component={AdminCrateUser} exact/>
                {/*MainCategory*/}
                <Route path="/admin/main_categories" component={AdminMainCategories} exact/>
                <Route path="/admin/main_categories/create" component={AdminCreateMainCategory} exact/>
                <Route path="/admin/main_categories/:id/edit" component={AdminMainCategoryEdit} exact/>
                {/*Category*/}
                <Route path="/admin/categories" component={AdminCategories} exact/>
                <Route path="/admin/categories/create" component={AdminCreateCategory} exact/>
                <Route path="/admin/categories/:slug/edit" component={AdminCategoryEdit} exact/>
            </Switch>
        </Router>
    );
}

export default App;
