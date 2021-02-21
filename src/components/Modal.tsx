import React from 'react';
import './modal.css'

const Modal = (props: any) => {
    console.log(props);
    return (
        <div
            className="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white rounded shadow-lg w-1/3">
                <div className="border-b px-4 py-2 flex justify-between items-center">
                    <h3 className="font-semibold text-lg">Modal Title</h3>
                    <button className="text-black close-modal" onClick={props.handleFunc}>X</button>
                </div>
                <div className="p-3">
                    {props.target}を削除しますか？
                </div>
                <div className="flex justify-end items-center w-100 border-t p-3">
                    <button
                        onClick={props.handleFunc}
                        className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal">Cancel
                    </button>
                    <button value={props.targetId} onClick={props.deleteFunc} className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white">OK</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
