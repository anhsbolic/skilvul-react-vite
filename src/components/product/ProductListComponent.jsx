import {useSelector} from "react-redux";
import ProductReduxItemComponent from "./ProductReduxItemComponent.jsx";

const ProductListComponent = () => {
    const products = useSelector((state) => state.product.products);
    return (
        <div className="d-flex flex-wrap" style={{gap: '8px'}}>
            {
                products.map((product, index) => {
                    return <ProductReduxItemComponent key={index} product={product}/>
                })
            }
        </div>
    );
}

export default ProductListComponent;
