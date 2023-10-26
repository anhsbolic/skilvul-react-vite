import PropTypes from 'prop-types';

const ModalLoadingComponent = ({isShow, message}) => {
    if (!isShow) {
        return null;
    }

    return (
        <>
            <div className="modal" id="loadingModal" tabIndex="-1" role="dialog" aria-labelledby="loadingModalLabel"
                 aria-hidden="true" style={{display: "block"}}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="loadingModalLabel">Loading...</h5>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                </div>
                            </div>
                            <p className="text-center mt-3">{message}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

ModalLoadingComponent.propTypes = {
    isShow: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
};

ModalLoadingComponent.defaultProps = {
    isShow: false,
    message: 'Loading...',
}

export default ModalLoadingComponent;
