import React from "react";

function Btn(props) {
    const clickHandler = () => {
        props.click()
  };
  

    return (
        <button
            onClick={clickHandler}
            className={`px-6 py-2 bg-red-900 text-white rounded-3xl font-medium ${props.className}`}
        >
            {props.children}
        </button>
    );
}

export default Btn;
