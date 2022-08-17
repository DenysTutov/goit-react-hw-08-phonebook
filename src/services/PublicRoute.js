import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/authUser/authSelectors';

export const PublicRoute = ({ children, restricted }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldNavigate = isLoggedIn && restricted;

  return shouldNavigate ? <Navigate to="/contacts" /> : children;
};
