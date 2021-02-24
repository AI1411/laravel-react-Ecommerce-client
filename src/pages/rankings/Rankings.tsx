import React, {useEffect, useState} from 'react';
import axios from "axios";
import Wrapper from "../layouts/Wrapper";
import {Link} from "react-router-dom";

const Rankings = () => {
    const [rankings, setRankings] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getRankings();
        getCategories();
    }, []);

    const getRankings = async () => {
        const response = await axios.get('http://stars.test/api/rankings');
        const data = response.data;

        setRankings(data);
    }

    const getCategories = async () => {
        const response = await axios.get('http://stars.test/api/categories');
        const data = response.data;

        setCategories(data);
    }
    return (
        <Wrapper>
            <section className="bg-white py-8 flex">
                <div className="flex-auto">
                    <nav className="mt-10">
                        <Link className="flex items-center py-2 px-8 text-gray-700 border-r-4 border-gray-700" to={'/'}>総合ランキング</Link>
                        {categories.map((category: any, index) =>
                            <Link to={`/rankings/${category.slug}`} className="flex items-center py-2 px-8 text-gray-700 border-r-4 border-gray-700">
                                <span className="mx-4 font-medium">{category.name}</span>
                            </Link>
                        )}
                    </nav>
                </div>
                <div className="flex-auto">
                    <div className="container mx-auto flex items-center flex-wrap">総合ランキング</div>
                    <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
                        {rankings.map((ranking: any, index) =>
                            <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col" key={index}>
                            <span className="rounded-full px-4 mr-2 bg-red-600 text-white p-2 rounded leading-none flex items-center w-16">
                                #{index + 1}
                            </span>
                                <Link to={`/products/${ranking.slug}`}>
                                    <img className="hover:grow hover:shadow-lg h-48 w-56 object-contain"
                                         src={ranking.image}/>
                                </Link>
                                <div className="pt-3 flex items-center">
                                    <p className="">{ranking.product_name}</p>
                                </div>
                                <p className="pt-1 text-gray-900">¥ {ranking.price}</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </Wrapper>
    );
};

export default Rankings;
