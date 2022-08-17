import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import styles from './App.module.scss';
import { PrivateRoute } from 'services/PrivateRoute';
import { PublicRoute } from 'services/PublicRoute';
import { getIsFetchingCurrentUser } from 'redux/authUser/authSelectors';
import authOperations from 'redux/authUser/authOperation';

// import ContactsPage from 'pages/ContactsPage';
// import LoginPage from 'pages/LoginPage';
// import RegisterPage from 'pages/RegisterPage';

const ContactsPage = lazy(() => import('pages/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <div className={styles.container}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route
                index
                element={
                  <PublicRoute restricted>
                    <RegisterPage />
                  </PublicRoute>
                }
              />

              <Route
                path="register"
                element={
                  <PublicRoute restricted>
                    <RegisterPage />
                  </PublicRoute>
                }
              />

              <Route
                path="login"
                element={
                  <PublicRoute restricted>
                    <LoginPage />
                  </PublicRoute>
                }
              />

              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <ContactsPage />
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </div>
    )
  );
};
