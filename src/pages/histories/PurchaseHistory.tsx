import React, {useEffect, useState} from 'react';
import {PurchaseHistoryType} from "../../types/purchase_history";
import axios from "axios";
import Wrapper from "../layouts/Wrapper";

const PurchaseHistory = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getHistories();
    }, []);

    const getHistories = async () => {
        const response = await axios.get('http://stars.test/api/histories');

        setItems(response.data);
    }
    return (
        <Wrapper>
            <div className="flex justify-center my-6">
                <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
                    <div className="flex-1">
                        <table className="w-full text-sm lg:text-base" cellSpacing="0">
                            <thead>
                            <tr className="h-12 uppercase">
                                <th className="hidden md:table-cell"></th>
                                <th className="text-left">商品名</th>
                                <th className="text-left">購入日</th>
                                <th className="lg:text-right text-left pl-5 lg:pl-0">
                                    <span className="lg:hidden" title="Quantity">Qtd</span>
                                    <span className="hidden lg:inline">個数</span>
                                </th>
                                <th className="hidden text-right md:table-cell">価格</th>
                                <th className="text-right">合計</th>
                            </tr>
                            </thead>
                            <tbody>
                            {items.map((item: any, index) =>
                                <tr key={index}>
                                    <td className="hidden pb-4 md:table-cell">
                                        <a href={`/products/${item.product_id}`}>
                                            <img
                                                src={item.product.image}
                                                className="w-20 rounded" alt="Thumbnail"/>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="#">
                                            <p className="mb-2 md:ml-4">{item.product.product_name}</p>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="#">
                                            <p className="mb-2 md:ml-4">{item.product.created_at}</p>
                                        </a>
                                    </td>
                                    <td className="justify-center md:justify-end md:flex mt-6">
                                        <div className="w-20 h-10">
                                            <div className="relative flex flex-row w-full h-8">
                                                <input type="number" value="2"
                                                       className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"/>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="hidden text-right md:table-cell">
                                        <span className="text-sm lg:text-base font-medium">
                                            ¥ {item.product.price}
                                        </span>
                                    </td>
                                    <td className="text-right">
                                        <span className="text-sm lg:text-base font-medium">
                                            ¥ {item.product.price}
                                        </span>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default PurchaseHistory;
