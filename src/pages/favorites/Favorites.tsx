import React, {SyntheticEvent, useEffect, useState} from 'react';
import axios from "axios";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        getFavorites();
    }, []);

    const getFavorites = async () => {
        const response = await axios.get('http://stars.test/api/favorites');
        const data = response.data;

        setMessage("");
        if (data.length === 0) {
            setMessage("お気に入りがありません");
        }
        setFavorites(data);
    }

    const removeFromFavorite = (e: any) => {
        const targetId = e.target.value;

        axios.delete(`http://stars.test/api/favorites/${targetId}`).then(() => {
            getFavorites();
        }).catch(err => {
            console.log(err)
        });
    }
    return (
        <div className="flex justify-center my-6">
            <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
                <div className="flex-1">
                    お気に入り
                    {favorites.length > 0
                        ? <table className="w-full text-sm lg:text-base" cellSpacing="0">
                            <thead>
                            <tr className="h-12 uppercase">
                                <th className="hidden md:table-cell"/>
                                <th className="text-left">商品名</th>
                                <th className="hidden text-right md:table-cell">価格</th>
                                <th className="hidden text-right md:table-cell"/>
                            </tr>
                            </thead>
                            <tbody>
                            {favorites.map((item: any, index) =>
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
                                    <td className="hidden text-right md:table-cell">
                                        <span className="text-sm lg:text-base font-medium">
                                            ¥ {item.product.price}
                                        </span>
                                    </td>
                                    <td className="hidden text-right md:table-cell">
                                        <button
                                            value={item.id}
                                            onClick={removeFromFavorite}
                                            className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                                        >
                                            削除
                                        </button>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                        : <div className="text-center">
                            {message}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Favorites;
