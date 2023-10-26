import {Link} from 'react-router-dom';

const DashboardLayout = ({children}) => {
    return (
        <>
            <nav>
                <h3>Belajar REACT</h3>
            </nav>

            <div id="container">
                <div className="sidebar">
                    <Link to="/">Home</Link>
                    <Link to="/products">Product</Link>
                    <Link to="/redux-products">Product Redux</Link>
                </div>

                <div className="main">{children}</div>
            </div>
        </>
    );
};

export default DashboardLayout;
