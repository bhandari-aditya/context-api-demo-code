import react from "react";

const counterContext = react.createContext({
    counter: 0,
    increment: () => {},
    decrement: () => {},
}); 

export default counterContext;