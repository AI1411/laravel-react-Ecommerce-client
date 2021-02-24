import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Loading from "../../components/Loading";
import './product.css';
import Wrapper from '../layouts/Wrapper';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState("");
    const [priceQuery, setPriceQuery] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        getAllProducts();
    }, [query, priceQuery]);

    const getAllProducts = async () => {
        const response = await axios.get(`http://stars.test/api/products?product_name=${query}&price=${priceQuery}`);
        const data = response.data;
        setProducts(data);

        setMessage("");
        if (data.length === 0) {
            setMessage("検索結果がありません。");
        }

        return setIsLoading(false);
    }
    if (isLoading) {
        return (
            <Loading/>
        )
    }
    return (
        <Wrapper>
            <section className="bg-white py-8">
                <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">

                    <nav id="store" className="w-full z-30 top-0 px-6 py-1 flex">
                        <div
                            className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

                            <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
                               href="#">
                                Store
                            </a>
                        </div>
                        <div className="md:w-2/3 md:flex lg:mt-0 rounded ml-auto">
                            <select onChange={e => setPriceQuery(e.target.value)}
                                    className="form-select block focus:bg-white" id="my-select">
                                <option value="">-----</option>
                                <option value="3000">3000円以下</option>
                                <option value="5000">5000円以下</option>
                                <option value="7000">7000円以下</option>
                                <option value="10000">10000円以下</option>
                            </select>
                        </div>
                        <div className="relative text-gray-600 align-items-center mt-2">
                            <input type="search" name="search" placeholder="Search"
                                   onChange={e => setQuery(e.target.value)}
                                   className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"/>
                            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                     version="1.1" id="Capa_1" x="0px"
                                     y="0px" viewBox="0 0 56.966 56.966"
                                     width="512px" height="512px">
                                    <path
                                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                                </svg>
                            </button>
                        </div>
                    </nav>
                    {message}
                    {products.map((product: any, index) =>
                        <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col" key={index}>
                            <Link to={`/products/${product.slug}`}>
                                <img className="hover:grow hover:shadow-lg h-48 w-56 object-contain"
                                     src={product.image}/>
                            </Link>
                            <div className="pt-3 flex items-center">
                                <p className="">{product.product_name}</p>
                            </div>
                            <p className="pt-1 text-gray-900">¥ {product.price}</p>
                        </div>
                    )}
                </div>
            </section>
        </Wrapper>
    );
};

export default Products;
