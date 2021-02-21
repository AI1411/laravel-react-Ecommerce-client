import React, {useEffect, useState} from 'react';
import AdminWrapper from "../layouts/AdminWrapper";
import axios from "axios";
import {ProductType} from "../../../types/product";

const AdminProductEdit = (props: any) => {
    const targetSlug = props.match.params.slug;
    const [categories, setCategories] = useState([]);
    const [product, setProduct] = useState<ProductType>({
        id: 0,
        product_name: '',
        description: '',
        price: 0,
        image: '',
        category_id: 0
    });

    useEffect(() => {
        getCategories();
        getProduct();
    }, []);

    const getCategories = async () => {
        const response = await axios.get('http://stars.test/api/categories');
        const data = response.data;

        setCategories(data);
    }

    const getProduct = async () => {
        const response = await axios.get(`http://stars.test/api/products/${targetSlug}`);
        const data = response.data;

        setProduct(data);
    }

    const updateProduct = () => {
        axios.put(`http://stars.test/api/products/${targetSlug}`, {
            product_name: product.product_name,
            price: product.price,
            description: product.description,
            category_id: product.category_id,
        }).then(() => {
            window.location.href = '/admin/products';
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <AdminWrapper active={'product'}>
            <div className="grid w-3/6 place-items-center mx-auto">
                <div className="w-full p-12 bg-white">
                    <h1 className="text-xl font-semibold">Edit Product</h1>
                    <form className="mt-6">
                        <div className="flex justify-between gap-3">
                            <span className="w-1/2">
                                <label className="block text-xs font-semibold text-gray-600 uppercase">Product Name</label>
                                <input
                                    type="text" name="product_name" placeholder="Product Name"
                                    value={product.product_name}
                                    onChange={e => setProduct({...product, product_name: e.target.value})}
                                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                    required/>
                            </span>
                            <span className="w-1/2">
                                <label className="block text-xs font-semibold text-gray-600 uppercase">Price</label>
                                <input type="number" name="price" placeholder="Price"
                                       value={product.price}
                                       onChange={e => setProduct({...product, price: parseInt(e.target.value)})}
                                       className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                />
                            </span>
                        </div>
                        <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Category</label>
                        <select name="category_id"
                                value={product.category_id}
                                onChange={e => setProduct({...product, category_id: parseInt(e.target.value)})}
                                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                >
                            {categories.map((category: any, index) =>
                                <option value={category.id} key={index}>{category.name}</option>
                            )}
                        </select>
                        <label htmlFor="email"
                               className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Description</label>
                        <textarea name="description" placeholder="Description" rows={10}
                                  value={product.description}
                                  onChange={e => setProduct({...product, description: e.target.value})}
                                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                        />
                        <button type="button"
                                onClick={updateProduct}
                                className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                            Edit
                        </button>
                    </form>
                </div>
            </div>
        </AdminWrapper>
    );
};

export default AdminProductEdit;
