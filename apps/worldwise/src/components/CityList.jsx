import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Massage from './Message'

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if(!cities.length) return <Massage massage='Add your first city by clicking on a city on the map'/>;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.cityName} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
