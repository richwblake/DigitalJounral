import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function EntryTitleInput({ handleChange, title }) {
  return (
        <TextField id="outlined-basic" label="In a word..." variant="filled" onChange={handleChange} value={title} />
  );
}


export default EntryTitleInput;