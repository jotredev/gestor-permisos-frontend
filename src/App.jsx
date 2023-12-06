import { Routes, Route } from 'react-router-dom';

// Layouts
import StoreLayout from './layouts/store.layout';
import AuthLayout from './layouts/auth.layout';
import AdminLayout from './layouts/admin.layout';

// Pages store
import HomePage from './pages/store/home.page';
import StorePage from './pages/store/store.page';
import AboutPage from './pages/store/about.page';

// Pages auth
import LoginPage from './pages/auth/login.page';
import RegisterPage from './pages/auth/register.page';

// Pages admins
import DashboardPage from './pages/admin/dashboard.page';
import UsersPage from './pages/admin/users.page';
import ProductsPage from './pages/admin/products.page';

import NotFoundPage from './pages/404';
import { AuthProvider } from './providers/auth.provider';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<StoreLayout />}>
          <Route index element={<HomePage />} />
          <Route path='tienda' element={<StorePage />} />
          <Route path='nosotros' element={<AboutPage />} />
        </Route>
        <Route path='/auth' element={<AuthLayout />}>
          <Route path='login' element={<LoginPage />} />
          <Route path='registro' element={<RegisterPage />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path='gestor-usuarios' element={<UsersPage />} />
          <Route path='gestor-productos' element={<ProductsPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
