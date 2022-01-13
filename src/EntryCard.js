import { ListItem, ListItemText } from '@mui/material';
import React from 'react';

function EntryCard({ entry }) {
  return (
    <ListItem disablePadding sx={{ color: "white", m: 2 }}>
      <ListItemText primary={`${entry.title} - ${entry.date}`} />
    </ListItem>
  );
}

export default EntryCard;