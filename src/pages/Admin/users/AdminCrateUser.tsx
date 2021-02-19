import React, {useState} from 'react';
import AdminWrapper from "../layouts/AdminWrapper";
import axios from "axios";

const AdminCreateUser = () => {
    const [error, setError] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [user, setUser] = useState<any>({
        first_name: '',
        last_name: '',
        image: '',
        gender: '',
        address: '',
        tel: '',
        year: '',
        month: '',
        day: '',
        status: 0,
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState<any>({
        first_name: '',
        last_name: '',
        gender: '',
        address: '',
        tel: '',
        year: '',
        month: '',
        day: '',
        status: 0,
        email: '',
        password: ''
    })

    const birthday = user.year + '-' + user.month + '-' + user.day;
    const createUser = () => {
        axios.post('http://stars.test/api/users', {
            first_name: user.first_name,
            last_name: user.last_name,
            image: user.image,
            gender: user.gender,
            address: user.address,
            tel: user.tel,
            birthday: birthday,
            status: user.status,
            email: user.email,
            password: user.password,
        }).then(() => {
            window.location.href = '/admin/users'
        }).catch(() => {
            setError('border border-red-500');
            setErrorMessage('不正があります');
        });
    }

    return (
        <AdminWrapper>
            <div className="grid w-3/6 place-items-center mx-auto">
                <div className="w-full p-12 bg-white">
                    <h1 className="text-xl font-semibold">Create Product</h1>
                    <form className="mt-6" encType="multipart/form-data">
                        <div className="flex justify-between gap-3">
                            <span className="w-1/2">
                                <label className="block text-xs font-semibold text-gray-600 uppercase">Last Name</label>
                                <input
                                    id="firstname" type="text" name="last_name" placeholder="John"
                                    value={user.last_name}
                                    className={`block w-full ${error} p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner`}
                                    onChange={e => setUser({...user, last_name: e.target.value})}
                                />
                                <span
                                    className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{errorMessage}</span>
                            </span>
                            <span className="w-1/2">
                                <label htmlFor="lastname"
                                       className="block text-xs font-semibold text-gray-600 uppercase">First Name</label>
                                <input
                                    id="lastname" type="text" name="first_name" placeholder="last name"
                                    value={user.first_name}
                                    className={`block w-full ${error} p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner`}
                                    required
                                    onChange={e => setUser({...user, first_name: e.target.value})}
                                />
                                <span
                                    className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{errorMessage}</span>
                            </span>
                        </div>
                        <div className="flex mt-2 justify-between gap-3">
                            <span className="w-1/3">
                                <label
                                    className="block text-xs font-semibold text-gray-600 uppercase">Birth Year</label>
                                <input
                                    type="text" name="year" placeholder="Year"
                                    value={user.year}
                                    className={`block w-full ${error} p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner`}
                                    onChange={e => setUser({...user, year: e.target.value})}
                                />
                                <span
                                    className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{errorMessage}</span>
                            </span>
                            <span className="w-1/3">
                                <label
                                    className="block text-xs font-semibold text-gray-600 uppercase">Birth Month</label>
                                <input
                                    type="text" name="month" placeholder="Month"
                                    value={user.month}
                                    className={`block w-full ${error} p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner`}
                                    onChange={e => setUser({...user, month: e.target.value})}
                                />
                                <span
                                    className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{errorMessage}</span>
                            </span>
                            <span className="w-1/3">
                                <label className="block text-xs font-semibold text-gray-600 uppercase">Birth Day</label>
                                <input
                                    type="text" name="day" placeholder="Day"
                                    value={user.day}
                                    className={`block w-full ${error} p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner`}
                                    onChange={e => setUser({...user, day: e.target.value})}
                                />
                                <span
                                    className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{errorMessage}</span>
                            </span>
                        </div>
                        <label htmlFor="gender"
                               className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Gender</label>
                        <select id="email" name="gender" placeholder="john.doe@company.com"
                                value={user.gender}
                                className={`block w-full ${error} p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner`}
                                onChange={e => setUser({...user, gender: e.target.value})}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <span
                            className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{errorMessage}</span>
                        <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Status</label>
                        <select id="email" name="status" placeholder="john.doe@company.com"
                                value={user.status}
                                className={`block w-full ${error} p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner`}
                                onChange={e => setUser({...user, status: e.target.value})}
                                required>
                            <option value="1">Active</option>
                            <option value="0">Not Avtive</option>
                        </select>
                        <span
                            className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{errorMessage}</span>
                        <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">TEl</label>
                        <input id="email" name="tel" placeholder="09012345678"
                               value={user.tel}
                               className={`block w-full ${error} p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner`}
                               onChange={e => setUser({...user, tel: e.target.value})}
                        />
                        <span
                            className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{errorMessage}</span>
                        <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Address</label>
                        <input id="email" name="address" placeholder="09012345678"
                               value={user.address}
                               className={`block w-full ${error} p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner`}
                               onChange={e => setUser({...user, address: e.target.value})}
                        />
                        <span
                            className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{errorMessage}</span>
                        <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Email</label>
                        <input id="email" name="email" placeholder="john.doe@company.com"
                               value={user.email}
                               autoComplete="email"
                               className={`block w-full ${error} p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner`}
                               onChange={e => setUser({...user, email: e.target.value})}
                        />
                        <span
                            className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{errorMessage}</span>
                        <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                        <input id="email" name="password" placeholder="password" type="password"
                               value={user.password}
                               autoComplete="password"
                               className={`block w-full ${error} p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner`}
                               onChange={e => setUser({...user, password: e.target.value})}
                        />
                        <span
                            className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{errorMessage}</span>
                        <button type="button" onClick={createUser}
                                className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
        </AdminWrapper>
    );
};

export default AdminCreateUser;
