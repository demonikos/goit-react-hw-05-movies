import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={css.Container}>
      <div className={css.Header}>
        <nav className={css.Nav}>
          <NavLink className={css.NavLink} to="/">
            Home
          </NavLink>
          <NavLink className={css.NavLink} to="/movies">
            Movies
          </NavLink>
        </nav>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
