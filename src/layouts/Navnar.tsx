import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import {CategoryType} from "../types/category";
import NavbarCart from './NavbarCart';
import {MainCategoryType} from "../types/mainCategory";

const Navbar = () => {
    const [categories1, setCategories1] = useState<MainCategoryType>({
        id: 0,
        name: "",
        slug: "",
    });
    const [subCategory1, setSubCategory1] = useState<CategoryType[]>([{
        id: 0,
        name: "",
        slug: "",
        main_category: '',
        main_category_id: 0,
    }]);
    const [categories2, setCategories2] = useState<MainCategoryType>({
        id: 0,
        name: "",
        slug: "",
    });
    const [subCategory2, setSubCategory2] = useState<CategoryType[]>([{
        id: 0,
        name: "",
        slug: "",
        main_category: '',
        main_category_id: 0,
    }]);
    const [categories3, setCategories3] = useState<MainCategoryType>({
        id: 0,
        name: "",
        slug: "",
    });
    const [subCategory3, setSubCategory3] = useState<CategoryType[]>([{
        id: 0,
        name: "",
        slug: "",
        main_category: '',
        main_category_id: 0,
    }]);
    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        const response = await axios.get(`http://stars.test/api/main_categories`);

        setCategories1(response.data[0]);
        setSubCategory1(response.data[0].categories);
        setCategories2(response.data[1]);
        setSubCategory2(response.data[1].categories)
        setCategories3(response.data[2]);
        setSubCategory3(response.data[2].categories)
    }
    return (
        <div className="bg-gray-200 font-sans leading-normal tracking-normal">
            <nav className="relative bg-white border-b-2 border-gray-300 text-gray-900">
                <div className="container mx-auto flex justify-between">
                    <div className="relative block p-4 lg:p-6 text-xl text-blue-600 font-bold">Logo</div>
                    <ul className="flex">
                        <li className="hover:bg-blue-800 hover:text-white">
                            <Link to="/products"
                                  className="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold">Products</Link>
                        </li>
                        <li className="hoverable hover:bg-blue-800 hover:text-white">
                            <input type="checkbox" value="selected" id="toggle-one" className="toggle-input"/>
                            <label htmlFor="toggle-one"
                                   className="block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold">Category</label>
                            <div role="toggle" className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-blue-800">
                                <div className="container mx-auto w-full flex flex-wrap justify-between mx-2">
                                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <h3 className="font-bold text-xl text-white text-bold mb-2">{categories1.name}</h3>
                                        {subCategory1.map((sub, index) =>
                                            <li key={index}>
                                                <a href={`/category/${sub.slug}/products`}
                                                   className="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">{sub.name}</a>
                                            </li>
                                        )}
                                    </ul>
                                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <h3 className="font-bold text-xl text-white text-bold mb-2">{categories2.name}</h3>
                                        {subCategory2.map((sub, index) =>
                                            <li key={index}>
                                                <a href={`/category/${sub.slug}/products`}
                                                   className="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">{sub.name}</a>
                                            </li>
                                        )}
                                    </ul>
                                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <h3 className="font-bold text-xl text-white text-bold">{categories3.name}</h3>
                                        {subCategory3.map((sub, index) =>
                                            <li key={index}>
                                                <a href={`/category/${sub.slug}/products`}
                                                   className="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">{sub.name}</a>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="hoverable hover:bg-blue-800 hover:text-white">
                            <input type="checkbox" value="selected" id="toggle-one" className="toggle-input"/>
                            <label htmlFor="toggle-one"
                                   className="block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold">メニュー</label>
                            <div role="toggle" className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-blue-800 flex">
                                <div className="container mx-auto w-full flex flex-wrap justify-between mx-2">
                                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <li><Link to={'/history'}>購入履歴</Link></li>
                                    </ul>
                                </div>
                                <div className="container mx-auto w-full flex flex-wrap justify-between mx-2">
                                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <li><Link to={'/favorites'}>お気に入り</Link></li>
                                    </ul>
                                </div>
                                <div className="container mx-auto w-full flex flex-wrap justify-between mx-2">
                                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <li><Link to={'/profile'}>プロフィール</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <NavbarCart/>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
