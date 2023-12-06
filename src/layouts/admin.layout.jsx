import { Outlet } from 'react-router-dom';
import Header from '../components/header.component';

const AdminLayout = () => {
  return (
    <main className='min-h-screen flex items-center justify-center'>
      <Header />
      <Outlet />
    </main>
  );
};

export default AdminLayout;
