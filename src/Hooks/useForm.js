import React, { useState } from "react";

const useFormHandler = () => {
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);

    function reV(event = null) {
        return event.target.value;
    }

    const changeHandler = (event) => {
        setInput(reV(event));
        if (Boolean(event.target.value)) {
            setError(false);
        } else {
            setError(true);
        }
    };

    const blurHandler = (event) => {
        if (Boolean(event.target.value)) {
            setError(false);
        } else {
            setError(true);
        }
    };
    
    const submitHandler = () => {
        if (Boolean(input)) {
            setError(false);
            return error;
        } else {
            setError(true);
            return error;
        }
    }

    return {
        input,
        changeHandler,
        blurHandler,
      error,
        setError,
        submitHandler
    };
};

export default useFormHandler;
