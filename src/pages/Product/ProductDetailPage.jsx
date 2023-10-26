import {useEffect, useState} from 'react';
import ProductItemComponent from "../../components/product/ProductItemComponent.jsx";
import {getProductDetail} from "../../services/productService.js";
import {useParams} from "react-router-dom";

const ProductDetailPage = () => {
    const {productId} = useParams()
    const [product, setProduct] = useState(null);

    const fetchProductDetail = async (id) => {
        const resProduct = await getProductDetail(id);
        setProduct(resProduct.data);
    }

    useEffect(() => {
        fetchProductDetail(productId);
    }, []);

    return (
        <>
            <div className="row w-100">
                <div className="col-8">
                    <h2>Product Detail</h2>
                </div>
            </div>

            <ProductItemComponent product={product}/>
        </>
    )
};

export default ProductDetailPage;
