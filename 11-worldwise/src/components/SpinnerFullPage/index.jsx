import styles from './SpinnerFullPage.module.css';

import { Spinner } from '../index';

function SpinnerFullPage() {
  return (
    <div className={styles.spinnerFullpage}>
      <Spinner />
    </div>
  );
}

export default SpinnerFullPage;
