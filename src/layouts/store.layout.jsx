import { Outlet } from 'react-router-dom';
import Header from '../components/header.component';

const StoreLayout = () => {
  return (
    <div>
      <Header />
      <main className='min-h-screen flex items-center justify-center'>
        <Outlet />
      </main>
    </div>
  );
};

export default StoreLayout;
