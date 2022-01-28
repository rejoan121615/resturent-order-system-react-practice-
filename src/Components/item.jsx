import React from "react";
import Btn from "../Ui/Btn";

const Item = (props) => {

  const addItemHandler = () => {
    props.click()
  }

    return (
        <div className="flex px-8 py-6 rounded-3xl bg-amber-200 justify-between mt-3">
            {/* discription  */}
            <div className="">
                <h1 className="font font-semibold text-2xl capitalize">
                    Name: {props.name}
                </h1>
                <h1 className="fon font-regular text-lg mt-1">
                    {" "}
                    Discription: {props.dis}
                </h1>
                <h1 className="text-base font-semibold mt-2">
                    Price: {props.price}
                </h1>
            </div>
            {/* price and btn  */}
            <div className="flex flex-col justify-center">
                <Btn click={addItemHandler} className="mt-2">Add item</Btn>
            </div>
        </div>
    );
};

export default Item;
