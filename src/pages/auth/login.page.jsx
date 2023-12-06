import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { validateEmail } from '../../helpers/validator.helper';
import useAuth from '../../hooks/auth.hook';
import axiosClient from '../../services/axios.service';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { setAuth } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      return toast.error('El email es obligatorio');
    }

    if (!validateEmail(email)) {
      return toast.error('El email no es válido');
    }

    if (!password) {
      return toast.error('El password es obligatorio');
    }

    try {
      const { data } = await axiosClient.post('/users/login', {
        email,
        password,
      });

      if (data.response === 'success') {
        localStorage.setItem('token', data.user.access_token);
        setAuth(data.user);
        navigate('/');
      }
    } catch (error) {
      console.log(error);
      return toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <h1 className='text-2xl uppercase font-medium mb-8'>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-5'>
          <label htmlFor='email'>Correo elctrónico</label>
          <input
            type='text'
            id='email'
            className='w-full p-4 border rounded-full mt-2 outline-none'
            placeholder='jotredev@gmail.com'
            autoComplete='off'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='password'>Contraseña</label>
          <input
            type='password'
            id='password'
            className='w-full p-4 border rounded-full mt-2 outline-none'
            placeholder='**********'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type='submit'
          className='p-4 bg-black text-white w-full rounded-full hover:ring-2 hover:ring-offset-2 hover:ring-black transition-all duration-300'
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
