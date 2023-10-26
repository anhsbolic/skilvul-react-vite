import { Link } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  return (
    <>
      <nav>
        <h3>Belajar REACT</h3>
      </nav>

      <div id="container">
        <div class="sidebar">
          <Link to="/">Home</Link>
          <Link to="/products">Product</Link>
        </div>

        <div class="main">{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
