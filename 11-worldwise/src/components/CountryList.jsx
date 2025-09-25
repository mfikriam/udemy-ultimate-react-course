import Spinner from './Spinner';
import styles from './CountryList.module.css';
import CountryItem from './CountryItem';
import Message from './Message';
import useCitiesContext from '../hooks/useCitiesContext';

function CountryList() {
  const { cities, isLoading } = useCitiesContext();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="Add your first city by clicking on a city on the map" />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { id: city.id, country: city.country, emoji: city.emoji }];
    }

    return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
