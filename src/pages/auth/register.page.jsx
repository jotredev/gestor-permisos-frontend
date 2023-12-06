import { useState } from 'react';
import { toast } from 'sonner';

import { validateEmail } from '../../helpers/validator.helper';

import axiosClient from '../../services/axios.service';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      return toast.error('El nombre es obligatorio');
    }
    if (!lastname) {
      return toast.error('El apellido es obligatorio');
    }
    if (!email) {
      return toast.error('El email es obligatorio');
    }

    if (!validateEmail(email)) {
      return toast.error('El email no es válido');
    }

    if (!password) {
      return toast.error('El password es obligatorio');
    }

    if (password.length < 6) {
      return toast.error('El password debe contener al menos 6 caracteres');
    }

    const toastLoading = toast.loading('Creando usuario...');

    try {
      const { data } = await axiosClient.post('/users/create', {
        name,
        lastname,
        email,
        password,
      });

      if (data.response === 'success') {
        toast.success('Usuario creado correctamente');
      }
    } catch (error) {
      return toast.error('Error al crear el usuario.');
    } finally {
      setName('');
      setLastname('');
      setEmail('');
      setPassword('');
      toast.dismiss(toastLoading);
    }
  };

  return (
    <div>
      <h1 className='text-2xl uppercase font-medium mb-8'>Registro</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-5'>
          <label htmlFor='name'>Nombre</label>
          <input
            type='text'
            id='name'
            className='w-full p-4 border rounded-full mt-2 outline-none'
            placeholder='Jorge Luis'
            autoComplete='off'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='lastname'>Apellidos</label>
          <input
            type='text'
            id='lastname'
            className='w-full p-4 border rounded-full mt-2 outline-none'
            placeholder='Trejo Payan'
            autoComplete='off'
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
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
          Crear cuenta
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
