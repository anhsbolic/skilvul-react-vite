import {Route, Routes} from 'react-router-dom';

import DashboardLayout from '../layouts/DashboardLayout';
import HomePage from '../pages/Home/HomePage';
import ProductCreatePage from '../pages/Product/ProductCreatePage';
import ProductListPage from '../pages/Product/ProductListPage';
import ProductDetailPage from '../pages/Product/ProductDetailPage';
import ProductReduxCreatePage from '../pages/ProductRedux/ProductReduxCreatePage';
import ProductReduxListPage from '../pages/ProductRedux/ProductReduxListPage';
import ProductReduxDetailPage from '../pages/ProductRedux/ProductReduxDetailPage';

const ROUTE_LIST = [
    {
        path: '/',
        element: <HomePage/>,
    },
    {
        path: '/product-new',
        element: <ProductCreatePage/>,
    },
    {
        path: '/products',
        element: <ProductListPage/>,
    },
    {
        path: '/products/:productId',
        element: <ProductDetailPage/>,
    },
    {
        path: '/redux-product-new',
        element: <ProductReduxCreatePage/>,
    },
    {
        path: '/redux-products',
        element: <ProductReduxListPage/>,
    },
    {
        path: '/redux-products/:productId',
        element: <ProductReduxDetailPage/>,
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
