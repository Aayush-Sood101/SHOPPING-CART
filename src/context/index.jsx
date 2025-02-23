// creating the context using createContext
// creating the provider by passing children to it

import { createContext, useState , useEffect } from "react";

export const ShoppingCartContext = createContext();

function ShoppingCartProvider({children}) {

    const [loading , setLoading] = useState(false);
    const [listOfProducts , setListOfProducts] = useState(null);

    async function fetchListOfProduct() {
        const apiResponse = await fetch('https://dummyjson.com/products');
        const result = await apiResponse.json();

        if(result && result?.products){
            setListOfProducts(result?.products);
        }
        
    }
    

    useEffect(() => {
        fetchListOfProduct();
    } , [])

    return (<ShoppingCartContext.Provider value={{listOfProducts}}>
        {children}
    </ShoppingCartContext.Provider>)
}

export default ShoppingCartProvider;