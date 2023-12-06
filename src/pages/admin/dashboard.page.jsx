import { Navigate, Link } from 'react-router-dom';
import useAuth from '../../hooks/auth.hook';

const DashboardPage = () => {
  const {
    auth: { permissions, email },
    isLoading,
  } = useAuth();

  if (isLoading) return <h1>Cargando...</h1>;

  return permissions.includes('isAdmin') ? (
    <div className='text-2xl'>
      Dahboard el usuario <span className='font-bold'>{email}</span> es
      administrador
      <div className='mt-4'>
        <Link to='/' className='text-center block'>
          Home page
        </Link>
        <Link to='/admin/gestor-usuarios' className='text-center block'>
          Gestor de usuarios
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

export default DashboardPage;
