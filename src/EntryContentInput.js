import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function EntryContentInput({ handleChange, content }) {
  return (
    <TextField
          onChange={handleChange}
          id="outlined-multiline-static"
          label="Please go on..."
          // fullWidth='true'
          multiline
          rows={10}
          value={content}
          variant="filled"
    />
  );
}

export default EntryContentInput;