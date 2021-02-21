import React, {useEffect, useState} from 'react';
import AdminWrapper from "../layouts/AdminWrapper";
import axios from "axios";
import {Link} from "react-router-dom";

const AdminCategories = () => {
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
        <AdminWrapper active={'categories'}>
            <div className="text-gray-900 bg-gray-200 w-full">
                <div className="p-4 flex">
                    <h1 className="text-3xl">
                        Category
                    </h1>
                    <Link to={'/admin/categories/create'}
                          className="ml-auto uppercase px-8 py-2 rounded bg-green-300 text-green-600 max-w-max shadow-sm hover:shadow-lg">Create Category
                    </Link>
                </div>
                <div className="px-3 py-4 flex justify-center">
                    <table className="w-full text-md bg-white shadow-md rounded mb-4">
                        <tbody>
                        <tr className="border-b">
                            <th className="text-left p-3 px-5">ID</th>
                            <th className="text-left p-3 px-5">Name</th>
                            <th className="text-left p-3 px-5">Main Category</th>
                            <th></th>
                        </tr>
                        {categories.map((category: any, index) =>
                            <tr className="border-b hover:bg-orange-100 bg-gray-100" key={index}>
                                <td className="p-3 px-5">
                                    {category.id}
                                </td>
                                <td className="p-3 px-5">
                                    {category.name}
                                </td>
                                <td className="p-3 px-5">
                                    {category.main_category}
                                </td>
                                <td className="p-3 px-5 flex justify-end">
                                    <Link to={`/admin/categories/${category.slug}/edit`} type="button"
                                            className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Edit
                                    </Link>
                                    <button type="button"
                                            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete
                                    </button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminWrapper>
    );
};

export default AdminCategories;
