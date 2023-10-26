import {useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {getProductList} from "../../services/productService.js";
import {useEffect, useState} from "react";
import ModalLoadingComponent from "../../components/loader/ModalLoadingComponent.jsx";
import {setProducts} from "../../redux/product/productSlice.js";
import ProductListComponent from "../../components/product/ProductListComponent.jsx";

const ProductReduxListPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);

    const fetchProductList = async () => {
        setIsLoading(true);

        const resProductList = await getProductList();

        dispatch(setProducts(resProductList));

        setIsLoading(false);
    }

    useEffect(() => {
        fetchProductList();
    }, []);

    const openProductCreatePage = () => {
        navigate('/redux-product-new');
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

            <ProductListComponent/>
        </>
    );
};

export default ProductReduxListPage;
