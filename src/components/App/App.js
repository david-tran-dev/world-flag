import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// components
import Header from '../Header/Header';
import Countries from '../Countries/Countries';
import NotFound from '../NotFound/NotFound';
import About from '../About/About';
import './app.scss';

// utilitaire
import { getDataFromAPI } from '../Tools/api';
import { getCountriesByRegion } from '../Tools/filterFunction';
import Loading from '../Loading/Loading';
import Footer from '../Footer/Footer';
import SearchBar from '../SearchBar/SearchBar';

const API_URL = 'https://restcountries.com/v2/all?fields=name,capital,region,population,flag';

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const createRegionsList = (list) => {
    if (!list.length) {
      return [];
    }

    // récupère la liste des régions
    const regions = list.reduce((reducer, element) => {
      reducer[element.region] = { route: element.region, label: element.region };
      return reducer;
    }, {});

    const regionsArray = Object.keys(regions).map((key) => regions[key]);

    // Remplace les urls avec un espace par un underscore
    regionsArray.forEach((region) => {
      region.route = region.route.replaceAll(' ', '_');
    });
    return regionsArray;
  };

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const data = await getDataFromAPI(API_URL);
      setCountries(data);
      setFilteredCountries(data);
      setLoading(false);
    }

    if (!countries.length) {
      getData();
    }

    if (!regions.length) {
      const regions = createRegionsList(countries);
      setRegions(regions);
    }
  }, [countries]);

  const handleCountrySearch = (value) => {
    const countrySearch = countries.filter((country) => country.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredCountries(countrySearch);
    navigate('/');
  };

  return (
    <div className="app">
      <Header regions={regions} />
      {loading
        ? <Loading />
        : (
          <Routes>
            <Route
              path="/"
              element={(
                <>
                  <SearchBar onCountrySubmit={handleCountrySearch} />
                  <Countries countries={filteredCountries} />
                </>
            )}
            />
            {regions.map(({ route, label }) => (
              <Route
                path={route}
                key={route}
                element={(
                  <>
                    <SearchBar onCountrySubmit={handleCountrySearch} />
                    <Countries countries={getCountriesByRegion(countries, label)} />
                  </>
                )}
              />
            ))}
            <Route path="/About" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      <Footer />
    </div>
  );
}

export default React.memo(App);
