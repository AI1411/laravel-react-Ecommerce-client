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
        <AdminWrapper>
            <div className="grid w-3/6 place-items-center mx-auto">
                <div className="w-full p-12 bg-white">
                    <h1 className="text-xl font-semibold">Create Product</h1>
                    <form className="mt-6">
                        <div className="flex justify-between gap-3">
                            <span className="w-1/2">
                                <label htmlFor="firstname"
                                       className="block text-xs font-semibold text-gray-600 uppercase">Product Name</label>
                                <input
                                    id="firstname" type="text" name="firstname" placeholder="John"
                                    autoComplete="given-name"
                                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                    required/>
                            </span>
                            <span className="w-1/2">
                                <label htmlFor="lastname"
                                       className="block text-xs font-semibold text-gray-600 uppercase">Price</label>
                                <input
                                    id="lastname" type="text" name="lastname" placeholder="Doe"
                                    autoComplete="family-name"
                                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                    required
                                />
                            </span>
                        </div>
                        <label htmlFor="email"
                               className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Category</label>
                        <select id="email" name="email" placeholder="john.doe@company.com"
                                  autoComplete="email"
                                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                required>
                            {categories.map((category: any, index) =>
                                <option value={category.id} key={index}>{category.name}</option>
                            )}
                        </select>
                        <label htmlFor="email"
                               className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Description</label>
                        <textarea id="email" name="email" placeholder="john.doe@company.com" rows={10}
                                  autoComplete="email"
                                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                  required/>
                        <button type="submit"
                                className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
        </AdminWrapper>
    );
};

export default AdminCreateProduct;
