import React, { useState } from "react";
import useFormHandler from "../Hooks/useForm";

const Form = (props) => {

    // name
    const {
        input: nameValue,
        changeHandler: nameChange,
        blurHandler: nameBlur,
        error: nameError,
        submitHandler: nameSubmit,
    } = useFormHandler();

    // email
    const {
        input: phoneValue,
        changeHandler: phoneChange,
        blurHandler: phoneBlur,
        error: phoneError,
        submitHandler: phoneSubmit,
    } = useFormHandler();
    // email
    const {
        input: emailValue,
        changeHandler: emailChange,
        blurHandler: emailBlur,
        error: emailError,
        submitHandler: emailSubmit,
    } = useFormHandler();
    // address
    const {
        input: addressValue,
        changeHandler: addressChange,
        blurHandler: addressBlur,
        error: addressError,
        submitHandler: addressSubmit,
    } = useFormHandler();

    const submitHandler = (event) => {
        event.preventDefault();
        // validate input fields 
        nameSubmit();
        emailSubmit();
        phoneSubmit();
        addressSubmit();
        if (nameValue && emailValue && phoneValue && addressValue) {
            // create a object for value 
            const orderData = {
                orderList: { ...props.submitData.orderData },
                address: {
                    name: nameValue,
                    phone: phoneValue,
                    email: emailValue,
                    address: addressValue
                }
            }
            // convert to json 
            const jsonOrderData = JSON.stringify(orderData);
            // console.log("value", nameValue, emailValue, phoneValue , addressValue)
            props.submitData.submit(jsonOrderData);
        }
    };


    const back = () => {
        props.backBtn()
    }

    return (
        <div className="w-[800px] mx-auto my-[80px] bg-slate-200 rounded-3xl px-[45px] py-[40px]">
            <form onSubmit={submitHandler}>
                {/* name  */}
                <div className="flex flex-col px-8 py-7 rounded-xl shadow-xl border-gray-300 border-2">
                    <label
                        htmlFor="name"
                        className="font-sans capitalize text-xl"
                    >
                        name
                    </label>
                    <input
                        value={nameValue}
                        onChange={nameChange}
                        onBlur={nameBlur}
                        type="text"
                        className="px-5 py-3 bg-white text-black capitalize border-black mt-3 rounded-lg"
                    />
                    {nameError && (
                        <p className="mt-2 font-regular text-md text-red-500">
                            Write your name please
                        </p>
                    )}
                </div>
                {/* email  */}
                <div className="flex flex-col px-8 py-7 rounded-xl shadow-xl border-gray-300 border-2 mt-5">
                    <label
                        htmlFor="email"
                        className="font-sans capitalize text-xl"
                    >
                        email
                    </label>
                    <input
                        value={emailValue}
                        onChange={emailChange}
                        onBlur={emailBlur}
                        type="email"
                        className="px-5 py-3 bg-white text-black border-black mt-3 rounded-lg"
                    />
                    {emailError && (
                        <p className="mt-2 font-regular text-md text-red-500">
                            What's your email?
                        </p>
                    )}
                </div>
                {/* phone number  */}
                <div className="flex flex-col px-8 py-7 rounded-xl shadow-xl border-gray-300 border-2 mt-5">
                    <label
                        htmlFor="phoneNumber"
                        className="font-sans capitalize text-xl"
                    >
                        phone number
                    </label>
                    <input
                        value={phoneValue}
                        onChange={phoneChange}
                        onBlur={phoneBlur}
                        type="number"
                        className="px-5 py-3 bg-white text-black capitalize border-black mt-3 rounded-lg"
                    />
                    {phoneError && (
                        <p className="mt-2 font-regular text-md text-red-500">
                            Not going to call you. Just fill up
                        </p>
                    )}
                </div>
                {/* address  */}
                <div className="flex flex-col px-8 py-7 rounded-xl shadow-xl border-gray-300 border-2 mt-5">
                    <label
                        htmlFor="address"
                        className="font-sans capitalize text-xl"
                    >
                        address
                    </label>
                    <input
                        value={addressValue}
                        onChange={addressChange}
                        onBlur={addressBlur}
                        type="text"
                        className="px-5 py-3 bg-white text-black capitalize border-black mt-3 rounded-lg"
                    />
                    {addressError && (
                        <p className="mt-2 font-regular text-md text-red-500">
                            Ohh. please...
                        </p>
                    )}
                </div>

                {/* submit btn  */}
                <div className="form-control mt-10 flex justify-between">
                    <button className="px-12 py-3 text-white bg-red-900 rounded-lg capitalize">
                        submit
                    </button>
                    <button onClick={back} className="px-12 py-3 text-white bg-yellow-600 rounded-lg capitalize">
                        Back
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
