import React, {useEffect, useState} from 'react';
import AdminWrapper from '../layouts/AdminWrapper';
import axios from "axios";
import { Link } from 'react-router-dom';

const AdminProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await axios.get('http://stars.test/api/products');
        const data = response.data;

        setProducts(data);
    }

    return (
        <AdminWrapper active={'product'}>
            <div className="text-gray-900 bg-gray-200 w-full">
                <div className="p-4 flex">
                    <h1 className="text-3xl">
                        Products
                    </h1>
                    <Link to={'/admin/products/create'}
                        className="ml-auto uppercase px-8 py-2 rounded bg-green-300 text-green-600 max-w-max shadow-sm hover:shadow-lg">Create Product
                    </Link>
                </div>
                <div className="px-3 py-4 flex justify-center">
                    <table className="w-full text-md bg-white shadow-md rounded mb-4">
                        <tbody>
                        <tr className="border-b">
                            <th className="text-left p-3 px-5">ID</th>
                            <th className="text-left p-3 px-5">Image</th>
                            <th className="text-left p-3 px-5">Product Name</th>
                            <th className="text-left p-3 px-5">Price</th>
                            <th className="text-left p-3 px-5">Category</th>
                            <th></th>
                        </tr>
                        {products.map((product: any, index) =>
                            <tr className="border-b hover:bg-orange-100 bg-gray-100" key={index}>
                                <td className="p-3 px-5">
                                    {product.id}
                                </td>
                                <td className="py-2 flex flex-row items-center">
                                    <img className="h-8 w-8 rounded-full object-cover "
                                         src={product.image} alt={product.product_name}/>
                                </td>
                                <td className="p-3 px-5">
                                    {product.product_name}
                                </td>
                                <td className="p-3 px-5">
                                    {product.price}
                                </td>
                                <td className="p-3 px-5">
                                    {product.category}
                                </td>
                                <td className="p-3 px-5 flex justify-end">
                                    <Link to={`/admin/products/${product.slug}/edit`} type="button"
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

export default AdminProducts;
