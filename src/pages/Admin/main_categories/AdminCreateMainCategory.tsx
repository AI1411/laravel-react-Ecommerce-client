import React, {useState} from 'react';
import AdminWrapper from "../layouts/AdminWrapper";
import {CategoryType} from "../../../types/category";
import axios from "axios";
import {MainCategoryType} from "../../../types/mainCategory";

const AdminCreateMainCategory = () => {
    const [mainCategory, setMainCategory] = useState<MainCategoryType>({
        id: 0,
        name: '',
        slug: '',
    });

    const createMainCategory = () => {
        axios.post('http://stars.test/api/main_categories', {
            name: mainCategory.name,
        }).then(res => {
            window.location.href = '/admin/main_categories'
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <AdminWrapper>
            <div className="grid w-3/6 place-items-center mx-auto">
                <div className="w-full p-12 bg-white">
                    <h1 className="text-xl font-semibold">Create Main Category</h1>
                    <form className="mt-6">
                        <div className="justify-between gap-3">
                            <label className="block text-xs font-semibold text-gray-600 uppercase">Main Category
                                Name</label>
                            <input type="text" name="name" placeholder="Name"
                                   className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                   onChange={e => setMainCategory({...mainCategory, name: e.target.value})}
                            />
                        </div>
                        <button type="button"
                                onClick={createMainCategory}
                                className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
        </AdminWrapper>
    );
};

export default AdminCreateMainCategory;
