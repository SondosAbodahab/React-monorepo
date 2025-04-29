import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Massage from "./Message";

function CountriesList({ cities, isLoading }) {
  
  let countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);


  if (isLoading) return <Spinner />;
  if (!countries.length)
    return (
      <Massage massage="Add your first country by clicking on a country on the map" />
    );
  return (
    <ul className={styles.countryList}>
      {countries.map((country, i) => (
        <CountryItem key={i} country={country} />
      ))}
    </ul>
  );
}

export default CountriesList;
