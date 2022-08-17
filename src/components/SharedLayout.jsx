import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
