import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import ProductItemComponent from "../../components/product/ProductItemComponent.jsx";
import {getProductList} from "../../services/productService.js";

const ProductListPage = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([]);

    const fetchProductList = async () => {
        const resProductList = await getProductList();
        setProducts(resProductList.data);
    }

    useEffect(() => {
        fetchProductList();
    }, []);

    const openProductCreatePage = () => {
        navigate('/product-new');
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
                        return <ProductItemComponent key={index} product={product}/>
                    })
                }
            </div>
        </>
    );
};

export default ProductListPage;
