import { Link } from 'react-router-dom';
import useAuth from '../../hooks/auth.hook';

const HomePage = () => {
  const {
    auth: { email, _id, permissions },
    isLoading,
  } = useAuth();

  if (isLoading) return <h1>Cargando...</h1>;

  return !_id ? (
    <div className='text-2xl'> No se ha iniciado sesión </div>
  ) : (
    <div className='block space-y-4 text-2xl'>
      <div className='text-center'>
        Home Page - <span className='font-bold'>{email}</span>
      </div>
      <div>
        <Link to='/tienda' className='text-center block'>
          Tienda
        </Link>
        {permissions.includes('isAdmin') && (
          <Link to='/admin' className='text-center block'>
            Dashboard admin
          </Link>
        )}
      </div>
    </div>
  );
};

export default HomePage;
