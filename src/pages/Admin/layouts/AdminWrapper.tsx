import React from 'react';
import Sidebar from "./Sidebar";

const AdminWrapper = (props: any) => {
    return (
        <div className="bg-gray-100 font-family-karla flex">
            <Sidebar/>
            {props.children}
        </div>
    );
};

export default AdminWrapper;
