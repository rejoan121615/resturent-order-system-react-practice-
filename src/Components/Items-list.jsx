import React from "react";
import Item from "./item";

const ItemsList = (props) => {
    const itemsList = Object.values(props.itemLists);
    const addItemHandler = (item) => {
        props.addCart(item);
    };

    return (
        <section className="bg-green-100">
            <div className="container mx-auto py-20">
                <div className="w-100 mx-auto bg-gray-200 px-8 py-8 rounded-2xl">
                    <h1 className="text-center font-bold text-2xl uppercase ">
                        Item Lists
                    </h1>
                    {/* items list  */}
                    <div className="mt-10">
                        {!itemsList.length && (
                            <div className=" flex justify-center items-center rounded-full mb-12">
                                <svg
                                    className="animate-spin h-8 w-8 text-red-800"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                            </div>
                        )}

                        {itemsList.map((item, index) => {
                            return (
                                <Item
                                    click={() => addItemHandler(item)}
                                    key={index}
                                    name={item.name}
                                    dis={item.dis}
                                    price={item.price}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ItemsList;
