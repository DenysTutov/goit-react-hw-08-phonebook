import { NavLink } from 'react-router-dom';

const itemsNav = [
  { href: 'register', title: 'Registation' },
  { href: 'login', title: 'LogIn' },
];

export const AuthNav = () => {
  return (
    <div>
      {itemsNav.map(({ href, title }) => (
        <NavLink to={href} key={href}>
          {title}
        </NavLink>
      ))}
    </div>
  );
};
