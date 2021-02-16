import React, {useEffect, useState} from 'react';
import {UserType} from "../../types/user";
import axios from "axios";

const Profile = () => {
    const [user, setUser] = useState<UserType>({
        id: 0,
        first_name: '',
        last_name: '',
        image: '',
        status: {
            text: '',
            class: '',
        },
        birthday: '',
        gender: '',
        address: '',
        tel: '',
        money: 0,
        email: '',
        created_at: ''
    });

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        const response = await axios.get('http://stars.test/api/user');
        const data = response.data;

        setUser(data);
    }
    return (
        <div className="container mx-auto my-5 p-5">
            <div className="md:flex no-wrap md:-mx-2 ">
                <div className="w-full md:w-3/12 md:mx-2">
                    <div className="bg-white p-3 border-t-4 border-green-400">
                        <div className="image overflow-hidden">
                            <img className="h-auto w-full mx-auto"
                                 src={user.image}
                                 alt=""/>
                        </div>
                        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{user.last_name} {user.first_name}</h1>
                        <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                            <li className="flex items-center py-3">
                                <span>Status</span>
                                <span className="ml-auto"><span
                                    className={`bg-${user.status.class}-500 py-1 px-2 rounded text-white text-sm`}>{user.status.text}</span></span>
                            </li>
                            <li className="flex items-center py-3">
                                <span>Member since</span>
                                <span className="ml-auto">{user.created_at}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="my-4"/>
                </div>
                <div className="w-full md:w-9/12 mx-2 h-64">
                    <div className="bg-white p-3 shadow-sm rounded-sm">
                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span className="text-green-500">
                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                            </svg>
                        </span>
                            <span className="tracking-wide">About</span>
                        </div>
                        <div className="text-gray-700">
                            <div className="grid md:grid-cols-2 text-sm">
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">First Name</div>
                                    <div className="px-4 py-2">Jane</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Last Name</div>
                                    <div className="px-4 py-2">Doe</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Gender</div>
                                    <div className="px-4 py-2">Female</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                                    <div className="px-4 py-2">+11 998001001</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Current Address</div>
                                    <div className="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Permanant Address</div>
                                    <div className="px-4 py-2">Arlington Heights, IL, Illinois</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Email.</div>
                                    <div className="px-4 py-2">
                                        <a className="text-blue-800" href="mailto:jane@example.com">{user.email}</a>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Birthday</div>
                                    <div className="px-4 py-2">Feb 06, 1998</div>
                                </div>
                            </div>
                        </div>
                        <button
                            className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
                            Full Information
                        </button>
                    </div>
                    <div className="my-4"/>
                </div>
            </div>
        </div>
    );
};

export default Profile;
