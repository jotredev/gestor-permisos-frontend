import { Link } from 'react-router-dom';

const StorePage = () => {
  return (
    <div className='text-2xl'>
      Store page
      <Link to='/' className='block mt-4 underline'>
        Home page
      </Link>
    </div>
  );
};

export default StorePage;
