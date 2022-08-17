import { useDispatch } from 'react-redux';
import authOperations from 'redux/authUser/authOperation';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubitRegistration = evt => {
    evt.preventDefault();

    const data = new FormData(evt.currentTarget);
    const newUser = {
      name: data.get('name').trim(),
      email: data.get('email').trim(),
      password: data.get('password'),
    };

    dispatch(authOperations.register(newUser));
  };

  return (
    <form onSubmit={handleSubitRegistration}>
      <label>
        Name
        <input type="text" name="name" required />
      </label>
      <br />

      <label>
        Email
        <input type="email" name="email" required />
      </label>
      <br />

      <label>
        Password
        <input type="password" name="password" required />
      </label>

      <button type="submit">Registration</button>
    </form>
  );
};

export default RegisterPage;
