import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './countries.scss';

// Components
import Card from '../MediaCard/MediaCard';
import SliderCountry from '../SliderCountry/SliderCountry';
// Utilitaires
import { filterResultByNumber } from '../Tools/filterFunction';

function Countries({ countries }) {
  const [filterCountries, setFilterCountries] = useState([]);
  const [rangeValue, setRangeValue] = useState(20);

  useEffect(() => {
    function filterCountriesByNumber() {
      const list = [...countries];
      const filteredCountries = filterResultByNumber(list, rangeValue);
      setFilterCountries(filteredCountries);
    }
    filterCountriesByNumber();
  }, [countries, rangeValue]);

  const handleSliderChange = (value) => {
    setRangeValue(value);
  };
  return (
    <div className="countries">
      {countries.length && (
      <SliderCountry
        rangeValue={rangeValue}
        onSliderChange={handleSliderChange}
        count={countries.length}
      />
      )}
      <ul className="countries-list">
        {(filterCountries.length)
          ? filterCountries.map((country) => <Card country={country} key={country.name} />)
          : null}
      </ul>
    </div>
  );
}

Countries.propTypes = {
  countries: PropTypes.array.isRequired,
};

export default React.memo(Countries);
