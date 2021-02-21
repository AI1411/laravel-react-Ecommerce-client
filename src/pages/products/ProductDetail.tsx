import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ProductType} from "../../types/product";
import Wrapper from '../layouts/Wrapper';

const ProductDetail = (props: any) => {
    const [product, setProduct] = useState<ProductType>({
        id: 0,
        product_name: "",
        description: "",
        price: 0,
        image: "",
        category_id: 0
    });
    const productId = props.match.params.id;

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        const response = await axios.get(`http://stars.test/api/products/${productId}`);

        setProduct(response.data);
    }

    const addToCart = () => {
        axios.post(`http://stars.test/api/carts/${productId}`, {
            product_id: productId,
            user_id: 1
        })
    }

    const addToFavorite = () => {
        axios.post(`http://stars.test/api/favorites`, {
            product_id: productId,
            user_id: 1,
        })
    }
    return (
        <Wrapper>
            <div
                className="min-w-screen min-h-screen bg-blue-50 flex items-center p-5 lg:p-10 overflow-hidden relative">
                <div
                    className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                    <div className="md:flex items-center -mx-10">
                        <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                            <div className="relative">
                                <img src={product.image}
                                     className="w-full relative z-10" alt=""/>
                                <div
                                    className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0">/
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-10">
                            <div className="mb-10">
                                <h1 className="font-bold uppercase text-2xl mb-5">{product.product_name}</h1>
                                <p className="text-sm">
                                    {product.description}
                                </p>
                            </div>
                            <div>
                                <div className="inline-block align-bottom mr-5">
                                    <span className="text-2xl leading-none align-baseline">¥</span>
                                    <span
                                        className="font-bold text-5xl leading-none align-baseline">{product.price}</span>
                                </div>
                            </div>
                            <div className="inline-block align-bottom mt-3">
                                <button
                                    className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-2 py-2 font-semibold"
                                    onClick={addToCart}
                                >
                                    <i className="mdi mdi-cart -ml-2 mr-2"/>
                                    カートに入れる
                                </button>
                                <button
                                    className="bg-blue-50 opacity-75 hover:opacity-100 ml-2 text-black hover:text-gray-900 rounded-full px-2 py-2 font-semibold"
                                    onClick={addToFavorite}
                                >
                                    <i className="mdi mdi-cart -ml-2 mr-2"/>
                                    お気に入りに追加する
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default ProductDetail;
