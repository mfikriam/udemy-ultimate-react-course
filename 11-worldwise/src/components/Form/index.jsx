import { useEffect, useState } from 'react';

import styles from './Form.module.css';

import { BackButton, Button, Message, Spinner } from '../index';
import { useUrlPosition } from '../../hooks';
import { convertToEmoji } from '../../utils';

const BASE_URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

function Form() {
  const [lat, lng] = useUrlPosition();

  const [isLoadingGeoCoding, setIsLoadingGeoCoding] = useState(false);
  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState('');
  const [emoji, setEmoji] = useState('');
  const [getCodingError, setGeoCodingError] = useState('');

  useEffect(
    function () {
      async function fetchCityData() {
        try {
          setIsLoadingGeoCoding(true);
          setGeoCodingError('');

          const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
          const data = await res.json();
          console.log(data);

          if (!data.countryCode) {
            throw new Error("That doesn't seem to be a city. Click somewhere else 🙂");
          }

          setCityName(data.city || data.locality || '');
          setCountry(data.countryName);
          setEmoji(convertToEmoji(data.countryCode));
        } catch (err) {
          setGeoCodingError(err.message);
        } finally {
          setIsLoadingGeoCoding(false);
        }
      }
      fetchCityData();
    },
    [lat, lng],
  );

  if (isLoadingGeoCoding) return <Spinner />;

  if (getCodingError) return <Message message={getCodingError} />;

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input id="cityName" onChange={(e) => setCityName(e.target.value)} value={cityName} />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input id="date" onChange={(e) => setDate(e.target.value)} value={date} />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea id="notes" onChange={(e) => setNotes(e.target.value)} value={notes} />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
