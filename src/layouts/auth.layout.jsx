import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <main className='min-h-screen flex items-center justify-center'>
      <Outlet />
    </main>
  );
};

export default AuthLayout;
