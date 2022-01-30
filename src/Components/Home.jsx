import React from "react";
import Btn from "../Ui/Btn";

const Home = (props) => {
    const cartItemHandler = () => {
        console.log("");
    };

    const dashControl = () => {
        props.showHideDash();
        // console.log("hello")
    };

    return (
        <React.Fragment>
            <section className="bg-red-100">
                <div className="container mx-auto py-6 flex justify-between">
                    {/* brand name  */}
                    <div className="">
                        <h1 className="font-sans text-gray-700 font-medium text-3xl">
                            Market Item List
                        </h1>
                    </div>
                    {/* kart list  */}
                    <div className="">
                        <Btn click={cartItemHandler}>
                            Cart Items : {props.cart}
                        </Btn>
                        <Btn click={dashControl} className="ml-3 bg-gray-500">
                            {props.dashStatus ? "Home" : "Dashboard"}
                        </Btn>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Home;
