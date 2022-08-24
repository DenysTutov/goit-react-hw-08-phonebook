import { lazy, Suspense } from 'react';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import { PrivateRoute } from 'services/PrivateRoute';
import { PublicRoute } from 'services/PublicRoute';
// import { getIsLoggedIn } from 'redux/authUser/authSelectors';
import { useFetchCurrentUserQuery } from 'redux/api';

const ContactsPage = lazy(() => import('pages/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const EditContactModal = lazy(() =>
  import('./EditContactModal/EditContactModal')
);

export const App = () => {
  // const dispatch = useDispatch();
  // const isLoggedIn = useSelector(getIsLoggedIn);

  const { isFetching, error } = useFetchCurrentUserQuery();
  console.log(error);

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     dispatch(baseApi.util.resetApiState());
  //   }
  // }, [dispatch, isLoggedIn]);
  // const isFetching = false;

  return !isFetching ? (
    <Suspense fallback={<></>}>
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
          >
            <Route
              path="edit/:contactId"
              element={
                <PrivateRoute>
                  <EditContactModal />
                </PrivateRoute>
              }
            />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  ) : (
    <div>Loading</div>
  );
};
