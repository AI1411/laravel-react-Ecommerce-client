import React, {useEffect, useState} from 'react';
import AdminWrapper from "../layouts/AdminWrapper";
import {CategoryType} from "../../../types/category";
import axios from "axios";
import {MainCategoryType} from "../../../types/mainCategory";

const AdminCategoryEdit = (props: any) => {
    const categorySlug = props.match.params.slug;
    const [category, setCategory] = useState<CategoryType>({
        id: 0,
        name: '',
        slug: '',
        main_category: '',
        main_category_id: 0,
    });
    const [mainCategories, setMainCategories] = useState<MainCategoryType[]>([
        {
            id: 0,
            name: '',
            slug: '',
        }
    ]);

    useEffect(() => {
        getCategory();
        getMainCategories();
    }, []);

    const getCategory = async () => {
        const response = await axios.get(`http://stars.test/api/categories/${categorySlug}`);
        const data = response.data;

        setCategory(data);
    }

    const getMainCategories = async () => {
        const response = await axios.get('http://stars.test/api/main_categories');

        setMainCategories(response.data);
    }

    const updateCategory = () => {
        axios.put(`http://stars.test/api/categories/${categorySlug}`, {
            name: category.name,
            main_category_id: category.main_category_id,
        }).then(() => {
            window.location.href = '/admin/categories';
        }).catch(err => {
            console.log(err);
        })
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
                                    defaultValue={category.name}
                                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                    onChange={e => setCategory({...category, name: e.target.value})}
                                />
                            </span>
                            <span className="w-1/2">
                                <label
                                    className="block text-xs font-semibold text-gray-600 uppercase">Main Category</label>
                                    <select name="main_category_id"
                                            defaultValue={category.main_category_id}
                                            onChange={e => setCategory({...category, main_category_id: parseInt(e.target.value)})}
                                            className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner`}
                                    >
                                        <option value="">----</option>
                                        {mainCategories.map((main, index) =>
                                            <option selected={main.id == category.main_category_id} value={main.id} key={index}>{main.name}</option>
                                        )}
                                    </select>
                            </span>
                        </div>
                        <button type="button"
                                onClick={updateCategory}
                                className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                            編集する
                        </button>
                    </form>
                </div>
            </div>
        </AdminWrapper>
    );
};

export default AdminCategoryEdit;
