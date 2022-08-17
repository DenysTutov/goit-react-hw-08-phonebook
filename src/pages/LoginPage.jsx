import { useDispatch } from 'react-redux';
import authOperations from 'redux/authUser/authOperation';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubitLogIn = evt => {
    evt.preventDefault();

    const data = new FormData(evt.currentTarget);
    const user = {
      email: data.get('email').trim(),
      password: data.get('password'),
    };

    dispatch(authOperations.logIn(user));
  };

  return (
    <form onSubmit={handleSubitLogIn}>
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

export default LoginPage;
