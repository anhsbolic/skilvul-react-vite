import PropTypes from 'prop-types';

const ProductItemComponent = ({product}) => {
    return (
        <div className="card" style={{width: '200px'}}>
            <img src={product.image} className="card-img-top product-img" alt="..."/>
            <div className="card-body product-info">
                <hs className="card-title">{product.name}</hs>
                <p className="card-text">{product.description}</p>
                <p className="card-text">{product.price}</p>
                <div
                    className="row justify-content-end px-2"
                    style={{gap: '8px'}}
                >
                    <button className="btn btn-danger mt-2 float-right">
                        Delete
                    </button>
                    <button className="btn btn-warning mt-2 float-right">
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
};

ProductItemComponent.propTypes = {
    product: PropTypes.object.isRequired,
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
