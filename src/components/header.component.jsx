import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/auth.hook';

const Header = () => {
  const navigate = useNavigate();

  const {
    auth: { _id },
    setAuth,
    setIsLoading,
  } = useAuth();

  const handleLogout = () => {
    setAuth({});
    setIsLoading(false);
    localStorage.removeItem('token');
    navigate('/auth/login');
  };

  return (
    <header className='fixed w-full left-0 top-0 flex items-center justify-between p-5'>
      <h1>LOGO</h1>
      {!_id ? (
        <div className='flex items-center gap-x-3'>
          <Link to='/auth/login'>Iniciar sesión</Link>
          <Link to='/auth/registro'>Registro</Link>
        </div>
      ) : (
        <button onClick={handleLogout}>Cerrar sesión</button>
      )}
    </header>
  );
};

export default Header;
