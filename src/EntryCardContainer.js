import React, { useEffect, useState } from 'react';
import EntryCard from './EntryCard';import List from '@mui/material/List';

function EntryCardContainer({ hasBeenSubmitted }) {

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/entries")
    .then(resp => resp.json())
    .then(json => setEntries(json))
  }, [hasBeenSubmitted])

  function renderEntries(entries) {
    return entries.map(newEntry => <EntryCard key={newEntry.id} entry={newEntry} />);
  }

  return (
    <List sx={{ bgcolor: "#1f18d6", borderRadius: "5px" }} >
      {renderEntries(entries)}
    </List>
  );
}

export default EntryCardContainer;