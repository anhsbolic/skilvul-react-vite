import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {getProductList} from "../../services/productService";
import ProductItemComponent from "../../components/product/ProductItemComponent";
import ModalLoadingComponent from "../../components/loader/ModalLoadingComponent.jsx";

const ProductListPage = () => {
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);

    const fetchProductList = async () => {
        setIsLoading(true);
        const resProductList = await getProductList();
        setProducts(resProductList);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchProductList();
    }, []);

    const openProductCreatePage = () => {
        navigate('/product-new');
    }

    return (
        <>
            <ModalLoadingComponent isShow={isLoading} message="Get Products..."/>

            <div className="row w-100">
                <div className="col-8">
                    <h2>Products</h2>
                    <p>Here a list of our products:</p>
                </div>
                <div className="col-4">
                    <button className="btn btn-success float-right"
                            onClick={openProductCreatePage}
                    >
                        Create
                    </button>
                </div>
            </div>

            <div className="d-flex flex-wrap" style={{gap: '8px'}}>
                {
                    products.map((product, index) => {
                        return <ProductItemComponent key={index} product={product}/>
                    })
                }
            </div>
        </>
    );
};

export default ProductListPage;
