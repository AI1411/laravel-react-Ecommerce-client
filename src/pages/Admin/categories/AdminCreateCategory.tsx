import React, {useEffect, useState} from 'react';
import AdminWrapper from "../layouts/AdminWrapper";
import axios from "axios";
import {MainCategoryType} from "../../../types/mainCategory";

const AdminCreateCategory = () => {
    const [mainCategories, setMainCategories] = useState<MainCategoryType[]>([
        {
            id: 0,
            name: '',
            slug: '',
        }
    ]);

    const [mainCategory, setMainCategory] = useState<any>({
        name: '',
        main_category_id: null
    })

    useEffect(() => {
        getMainCategories();
    }, []);

    const getMainCategories = async () => {
        const response = await axios.get('http://stars.test/api/main_categories');

        setMainCategories(response.data);
    }

    const createCategory = () => {
        axios.post('http://stars.test/api/categories', {
            name: mainCategory.name,
            main_category_id: mainCategory.main_category_id,
        }).then(() => {
            window.location.href = '/admin/categories'
        });
    }
    return (
        <AdminWrapper>
            <div className="grid w-3/6 place-items-center mx-auto">
                <div className="w-full p-12 bg-white">
                    <h1 className="text-xl font-semibold">Create Product</h1>
                    <form className="mt-6">
                        <div className="flex justify-between gap-3">
                            <span className="w-1/2">
                                <label
                                    className="block text-xs font-semibold text-gray-600 uppercase">Category Name</label>
                                <input
                                    id="firstname" type="text" name="name" placeholder="Category"
                                    autoComplete="given-name"
                                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                    onChange={e => setMainCategory({...mainCategory, name: e.target.value})}
                                />
                            </span>
                            <span className="w-1/2">
                                <label className="block text-xs font-semibold text-gray-600 uppercase">Main Category
                                </label>
                        <select id="email" name="main_category_id" placeholder="john.doe@company.com"
                                className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner`}
                                onChange={e => setMainCategory({...mainCategory, main_category_id: e.target.value})}
                        >
                            <option value="">----</option>
                            {mainCategories.map((main: MainCategoryType, index) =>
                                <option key={index} value={main.id}>{main.name}</option>
                            )}
                        </select>
                            </span>
                        </div>
                        <button type="button"
                                onClick={createCategory}
                                className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                            作成する
                        </button>
                    </form>
                </div>
            </div>
        </AdminWrapper>
    );
};

export default AdminCreateCategory;
