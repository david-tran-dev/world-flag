import React from 'react';
import {
  Container, Box, Typography, List, ListItem, ListItemText,
} from '@mui/material';

function About() {
  return (
    <Container>

      <Box
        sx={{
          my: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Ce site a été réalisé avec React dans le cadre de l'apprentissage des points suivants :
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemText>
              - React Hooks useState, useEffect
            </ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemText>
              - Mise en place des routes avec React Router v6
            </ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemText>
              - Utilisation de la librairie Material UI
            </ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemText>
              - Utilisation du préprocesseur SASS pour le style custom
            </ListItemText>
          </ListItem>

        </List>
      </Box>

    </Container>
  );
}

export default React.memo(About);
