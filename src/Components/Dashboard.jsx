import React from "react";
import Btn from "../Ui/Btn";
import List from "../Components/item";

const Dashboard = (props) => {
    let totalPrice = 0;

    if (props.orderList.length) {
        props.orderList.map((item, index) => {
            return (totalPrice += item.price);
        });
    }

    return (
        <section className="bg-stone-400">
            <div className="container mx-auto py-10 flex items-center flex-col">
                <h1 className="text-center text-3xl font-sans font-bold capitalize">
                    order details
                </h1>
                {/* order details  */}
                <div className="flex mt-5 w-2/6 mx-auto justify-between border-2 border-white px-8 py-3 rounded-xl">
                    <h1 className="font-sans text-xl font-semibold capitalize">
                        total price : {totalPrice}
                    </h1>
                    <h1 className="font-sans text-xl font-semibold capitalize">
                        total items : {props.orderList.length}
                    </h1>
                </div>
                {/* list items  */}
                <div className="w-3/6">
                    {props.orderList.map((item, index) => {
                        console.log(item);
                        return (
                            <List
                                key={index}
                                name={item.name}
                                dis={item.dis}
                                price={item.price}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
