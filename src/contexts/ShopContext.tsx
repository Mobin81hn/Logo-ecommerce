import { createContext, FC, ReactNode } from "react";
import all_products from "../assets/all_products";

export const ShopContext = createContext(null)

interface IProps {
    children: ReactNode
}

const ShopContextProvider: FC<IProps> = ({children}) => {
    const contextValue = {all_products}
    return ( 
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
     );
}
 
export default ShopContextProvider;