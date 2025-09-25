import { Outlet } from 'react-router-dom';

import styles from './Sidebar.module.css';

import { Logo, AppNav, Footer } from '../index';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Sidebar;
