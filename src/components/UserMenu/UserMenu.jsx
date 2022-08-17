import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/authUser/authOperation';
import { baseApi } from 'redux/contacts/contactsApi';
import { getAuthName } from 'redux/authUser/authSelectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getAuthName);

  const handleLogOut = () => {
    dispatch(authOperations.logOut());
    dispatch(baseApi.util.resetApiState());
  };

  return (
    <div>
      <span>
        <b>Welcome, {userName}</b>
      </span>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
