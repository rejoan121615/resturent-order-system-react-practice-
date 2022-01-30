import React, {useState} from "react";
import OrderDetailsList from './OrderDetailsList';
import Form from '../Components/Form';

const Dashboard = (props) => {
    let totalPrice = 0;
    const [showOrderForm, setShowOrderForm] = useState(false);

    if (props.orderList.length) {
        props.orderList.map((item, index) => {
            return (totalPrice += item.price);
        });
    }

    const nextStep = () => {
        setShowOrderForm(!showOrderForm);
    };

    const backBtnHandler = () => {
        setShowOrderForm(!showOrderForm);
    }
    
    const submitOrder = (data) => {
        // create header 
        const reqHeader = new Headers()
        // req header / configration 
        const reqOptions = {
            method: "POST",
            headers: reqHeader,
            body: data,
            redirect: 'follow'
        }
        // send data
        fetch(
            "https://to-do-list-c1209-default-rtdb.firebaseio.co/orders.json",
            reqOptions
        )
            .then((res) => {
                console.log("server response", res.json());
                return res;
            })
            .then((res) => {
                console.log("filtering res", res);
            })
            .catch((error) => {
                console.log("got an error", error);
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
                {/* show order details  */}
                {!showOrderForm &&  <OrderDetailsList nextStep={nextStep} totalPrice={totalPrice} orderList={props.orderList} />}
                {showOrderForm && <Form backBtn={backBtnHandler} submitData={{orderData: props.orderList, submit: submitOrder}} />}
            </div>
        </section>
    );
};

export default Dashboard;
