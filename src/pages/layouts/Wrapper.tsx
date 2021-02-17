import React from 'react';
import Navbar from "../../layouts/Navnar";

const Wrapper = (props: any) => {
    return (
        <>
            <Navbar/>
            {props.children}
        </>
    );
};

export default Wrapper;
