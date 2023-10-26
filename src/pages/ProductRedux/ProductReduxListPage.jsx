import {useNavigate} from 'react-router-dom';
import {useSelector} from "react-redux";
import ProductReduxItemComponent from "../../components/product/ProductReduxItemComponent";

const ProductReduxListPage = () => {
    const navigate = useNavigate()
    const products = useSelector((state) => state.product.products);

    const openProductCreatePage = () => {
        navigate('/redux-product-new');
    }

    return (
        <>
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
                        return <ProductReduxItemComponent key={index} product={product}/>
                    })
                }
            </div>
        </>
    );
};

export default ProductReduxListPage;
