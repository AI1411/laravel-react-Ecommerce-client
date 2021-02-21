import React, {useEffect, useState} from 'react';
import AdminWrapper from "../layouts/AdminWrapper";
import {MainCategoryType} from "../../../types/mainCategory";
import axios from "axios";

const AdminMainCategoryEdit = (props: any) => {
    const targetId = props.match.params.id;
    const [mainCategory, setMainCategory] = useState<MainCategoryType>({
        id: 0,
        name: '',
        slug: '',
    });

    useEffect(() => {
        getMainCategory();
    }, []);

    const getMainCategory = async () => {
        const response = await axios.get(`http://stars.test/api/main_categories/${targetId}`);
        const data = response.data;

        setMainCategory(data);
    }

    const updateMainCategory = () => {
        axios.put(`http://stars.test/api/main_categories/${targetId}`, {
            name: mainCategory.name,
        }).then(() => {
            window.location.href = '/admin/main_categories'
        })
    }
    return (
        <AdminWrapper active={'main_categories'}>
            <div className="grid w-3/6 place-items-center mx-auto">
                <div className="w-full p-12 bg-white">
                    <h1 className="text-xl font-semibold">Create Product</h1>
                    <form className="mt-6">
                        <div className="justify-between gap-3">
                            <label
                                className="block text-xs font-semibold text-gray-600 uppercase">Main Category Name</label>
                            <input
                                id="firstname" type="text" name="name" placeholder="Category"
                                defaultValue={mainCategory.name}
                                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                onChange={e => setMainCategory({...mainCategory, name: e.target.value})}
                            />
                        </div>
                        <button type="button"
                                onClick={updateMainCategory}
                                className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                            編集する
                        </button>
                    </form>
                </div>
            </div>
        </AdminWrapper>
    );
};

export default AdminMainCategoryEdit;
