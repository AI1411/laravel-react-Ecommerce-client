import React, {useEffect, useState} from 'react';
import AdminWrapper from "../layouts/AdminWrapper";
import axios from "axios";

const AdminRanking = () => {
    const [rankigns, setRankings] = useState([]);
    useEffect(() => {
        getRankings();
    }, []);

    const getRankings = async () => {
        const response = await axios.get('http://stars.test/api/rankings');
        const data = response.data;

        setRankings(data);
    }
    return (
        <AdminWrapper>
            <div className="my-auto w-full">
                <div>
                    <div className="flex flex-col max-w-full overflow-x-hidden shadow-md m-8">
                        <div
                            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 bg-white p-6 space-y-2 md:space-y-0">
                            <div className="relative sm:col-span-2 md:col-span-3 lg:col-span-2">
                                <input type="text" placeholder="Search ....."
                                       className="block w-full px-8 py-2 border border-gray-300 placeholder-gray-500 text-gray-800 shadow-sm rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"/>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor" className="absolute left-3 bottom-3 h-4 w-4 text-gray-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                </svg>
                            </div>

                            <div className="">
                                <select name="representative"
                                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-800 shadow-sm rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm">
                                    <option value="">Representative</option>
                                </select>
                            </div>

                            <div className="">
                                <select name="status"
                                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-800 shadow-sm rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm">
                                    <option value="">Status Report</option>
                                </select>
                            </div>

                            <div className="">
                                <select name="schedule"
                                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-800 shadow-sm rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm">
                                    <option value="">Schedule Date</option>
                                </select>
                            </div>

                            <button
                                className="bg-indigo-800 text-white text-xs font-semibold py-2 rounded-md border-0">Add
                                Schedule
                            </button>
                        </div>

                        <table className="overflow-x-auto w-full bg-white">
                            <thead className="bg-blue-100 border-b border-gray-300">
                            <tr>
                                <th className="p-4 text-left text-sm font-medium text-gray-500">Rank</th>
                                <th className="p-4 text-left text-sm font-medium text-gray-500">Image</th>
                                <th className="p-4 text-left text-sm font-medium text-gray-500">Product Name</th>
                                <th className="p-4 text-left text-sm font-medium text-gray-500">Product Price</th>
                                <th className="p-4 text-left text-sm font-medium text-gray-500">Category Name</th>
                            </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm divide-y divide-gray-300">
                            {rankigns.map((rank: any, index) =>
                                <tr className="bg-white font-medium text-sm divide-y divide-gray-200">
                                    <td className="p-4 whitespace-nowrap">{index + 1}</td>
                                    <td className="py-2 flex flex-row items-center">
                                        <img className="h-8 w-8 rounded-full object-cover "
                                             src={rank.image} alt={rank.product_name}/>
                                    </td>
                                    <td className="p-4 whitespace-nowrap">{rank.product_name}</td>
                                    <td className="p-4 whitespace-nowrap">{rank.price}</td>
                                    <td className="p-4 whitespace-nowrap">{rank.category_name}</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminWrapper>
    );
};

export default AdminRanking;
