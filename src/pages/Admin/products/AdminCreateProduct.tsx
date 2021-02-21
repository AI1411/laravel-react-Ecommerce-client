import React, {useEffect, useState} from 'react';
import AdminWrapper from "../layouts/AdminWrapper";
import axios from "axios";
import {ProductType} from "../../../types/product";

const AdminCreateProduct = () => {
    const [categories, setCategories] = useState([]);
    const [product, setProduct] = useState<ProductType>({
        id: 0,
        product_name: '',
        price: 0,
        description: '',
        image: '',
        category_id: 0.
    })

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        const response = await axios.get('http://stars.test/api/categories');
        const data = response.data;

        setCategories(data);
    }

    const createProduct = () => {
        axios.post('http://stars.test/api/products', {
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
                    <h1 className="text-xl font-semibold">Create Product</h1>
                    <form className="mt-6">
                        <div className="flex justify-between gap-3">
                            <span className="w-1/2">
                                <label
                                    className="block text-xs font-semibold text-gray-600 uppercase">Product Name</label>
                                <input type="text" name="product_name" placeholder="Product Name"
                                       className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                       onChange={e => setProduct({...product, product_name: e.target.value})}
                                />
                            </span>
                            <span className="w-1/2">
                                <label className="block text-xs font-semibold text-gray-600 uppercase">Price</label>
                                <input
                                    id="lastname" type="text" name="price" placeholder="Price"
                                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                    onChange={e => setProduct({...product, price: parseInt(e.target.value)})}
                                />
                            </span>
                        </div>
                        <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Category</label>
                        <select id="email" name="category_id"
                                onChange={e => setProduct({...product, category_id: parseInt(e.target.value)})}
                                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                        >
                            <option value="">-----</option>
                            {categories.map((category: any, index) =>
                                <option value={category.id} key={index}>{category.name}</option>
                            )}
                        </select>
                        <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Description</label>
                        <textarea name="description" placeholder="Description" rows={10}
                                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                  onChange={e => setProduct({...product, description: e.target.value})}
                        />
                        <button type="button"
                                onClick={createProduct}
                                className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                            Create
                        </button>
                    </form>
                </div>
            </div>
        </AdminWrapper>
    );
};

export default AdminCreateProduct;
