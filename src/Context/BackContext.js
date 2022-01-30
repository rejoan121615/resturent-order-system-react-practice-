import React, { createContext } from "react";

const FormContext = createContext();

const FormContextProvider = FormContext.Provider();
const FormContextConsumer = FormContext.Consumer();

export { FormContextProvider, FormContextConsumer };
