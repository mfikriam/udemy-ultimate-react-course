import styles from './AppLayout.module.css';

import { Map, Sidebar, User } from '../../components';

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
