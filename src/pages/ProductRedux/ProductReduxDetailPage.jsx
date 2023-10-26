import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import ProductReduxItemComponent from "../../components/product/ProductReduxItemComponent";

const ProductReduxDetailPage = () => {
    const {productId} = useParams()
    const products = useSelector((state) => state.product.products);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = products.find((item) => item.id === productId);
        setProduct(foundProduct);
    }, []);

    return (
        <>
            <div className="row w-100">
                <div className="col-8">
                    <h2>Product Detail</h2>
                </div>
            </div>

            <ProductReduxItemComponent product={product}/>
        </>
    )
};

export default ProductReduxDetailPage;
