import React from 'react';
import PropTypes from 'prop-types';
import './mediaCard.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import numberFormat from '../Tools/numberFormat';

function MediaCard({ country }) {
  return (
    <li className="card">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="120"
          image={country.flag}
          alt={country.name}
        />
        <CardContent className="cardContent">
          <Typography gutterBottom variant="h7" component="div">
            {country.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Capital: {country.capital}<br />
            Region: {country.region}<br />
            Population: {numberFormat(country.population)}<br />
          </Typography>
        </CardContent>
      </Card>
    </li>
  );
}

MediaCard.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
  }).isRequired,
};

export default React.memo(MediaCard);
