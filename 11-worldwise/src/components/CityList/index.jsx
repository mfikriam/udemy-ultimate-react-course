import styles from './CityList.module.css';

import { useCitiesContext } from '../../hooks';
import { Spinner, CityItem, Message } from '../index';

function CityList() {
  const { cities, isLoading } = useCitiesContext();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="Add your first city by clicking on a city on the map" />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
