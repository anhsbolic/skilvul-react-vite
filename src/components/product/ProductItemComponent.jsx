import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const ProductItemComponent = ({product}) => {
    return (
        <Link to={`/products/${product?.id}`}>
            <div className="card" style={{width: '200px'}}>
                <img src={product?.image} className="card-img-top product-img" alt="..."/>
                <div className="card-body product-info">
                    <p className="card-title">{product?.name}</p>
                    <p className="card-text">{product?.description}</p>
                    <p className="card-text">{product?.price}</p>
                </div>
            </div>
        </Link>
    );
};

ProductItemComponent.propTypes = {
    product: PropTypes.object,
};

ProductItemComponent.defaultProps = {
    product: {
        id: 0,
        name: '',
        description: '',
        price: 0,
        image: null,
    },
}

export default ProductItemComponent;
