import { useContext } from "react";
import { ShoppingCartContext } from "../../context";


const ProductListPage = () => {

    const {listOfProducts} = useContext(ShoppingCartContext);

    return (
        <section>
            
        </section>
    )
}

export default ProductListPage;