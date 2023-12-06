import { Navigate, Link } from 'react-router-dom';
import useAuth from '../../hooks/auth.hook';

const ProductsPage = () => {
  const {
    auth: { email, permissions },
    isLoading,
  } = useAuth();

  if (isLoading) return <h1>Cargando...</h1>;

  return permissions.includes('isAdmin') ? (
    <div className='text-2xl'>
      Admin - Products page - <span className='font-bold'>{email}</span>
      <div className='mt-4'>
        <Link to='/' className='text-center block'>
          Home page
        </Link>
        <Link to='/admin' className='text-center block'>
          Dashboard
        </Link>
        <Link to='/admin/gestor-productos' className='text-center block'>
          Gestor de productos
        </Link>
      </div>
    </div>
  ) : (
    <Navigate to='/' />
  );
};

export default ProductsPage;
