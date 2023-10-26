import { Route, Routes } from 'react-router-dom';

import DashboardLayout from '../layouts/DashboardLayout';
import HomePage from '../pages/Home/HomePage';
import ProductCreatePage from '../pages/Product/ProductCreatePage';
import ProductListPage from '../pages/Product/ProductListPage';
import ProductDetailPage from '../pages/Product/ProductDetailPage';

const ROUTE_LIST = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/product-new',
    element: <ProductCreatePage />,
  },
  {
    path: '/products',
    element: <ProductListPage />,
  },
  {
    path: '/products/:id',
    element: <ProductDetailPage />,
  },
];

const AppRouter = () => {
  return (
    <Routes>
      {ROUTE_LIST.map((route, index) => (
        <Route
          key={`route-${index}`}
          path={route.path}
          element={<DashboardLayout>{route.element}</DashboardLayout>}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;