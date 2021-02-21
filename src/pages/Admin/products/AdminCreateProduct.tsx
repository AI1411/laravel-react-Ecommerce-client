import React, {useEffect, useState} from 'react';
import AdminWrapper from "../layouts/AdminWrapper";
import axios from "axios";

const AdminCreateProduct = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        const response = await axios.get('http://stars.test/api/categories');
        const data = response.data;

        setCategories(data);
    }
    return (
        <AdminWrapper active={'product'}>
            <div className="grid w-3/6 place-items-center mx-auto">
                <div className="w-full p-12 bg-white">
                    <h1 className="text-xl font-semibold">Create Product</h1>
                    <form className="mt-6">
                        <div className="flex justify-between gap-3">
                            <span className="w-1/2">
                                <label className="block text-xs font-semibold text-gray-600 uppercase">Product Name</label>
                                <input id="firstname" type="text" name="product_name" placeholder="Product Name"
                                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                    required/>
                            </span>
                            <span className="w-1/2">
                                <label className="block text-xs font-semibold text-gray-600 uppercase">Price</label>
                                <input
                                    id="lastname" type="text" name="price" placeholder="Price"
                                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                    required
                                />
                            </span>
                        </div>
                        <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Category</label>
                        <select id="email" name="category_id"
                                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                required>
                            <option value="">-----</option>
                            {categories.map((category: any, index) =>
                                <option value={category.id} key={index}>{category.name}</option>
                            )}
                        </select>
                        <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Description</label>
                        <textarea name="description" placeholder="Description" rows={10}
                                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                  required/>
                        <button type="submit"
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
