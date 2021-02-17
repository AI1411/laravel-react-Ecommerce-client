import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Loading from "../../components/Loading";
import Wrapper from "../layouts/Wrapper";

const CategoryProducts = (props: any) => {
    const slug = props.match.params.slug;
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = async () => {
        const response = await axios.get(`http://stars.test/api/categories/${slug}`);

        setProducts(response.data.products);

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

                    <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                        <div
                            className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

                            <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
                               href="#">
                                {slug}
                            </a>
                        </div>
                    </nav>

                    {products.map((product: any, index) =>
                        <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col" key={index}>
                            <Link to={`/products/${product.id}`}>
                                <img className="hover:grow hover:shadow-lg h-48 w-56 object-contain"
                                     src={product.image}
                                />
                                <div className="pt-3 flex items-center justify-between">
                                    <p className="">{product.product_name}</p>
                                </div>
                                <p className="pt-1 text-gray-900">¥{product.price}</p>
                            </Link>
                        </div>
                    )}
                </div>
            </section>
        </Wrapper>
    );
};

export default CategoryProducts;
