import React from 'react';
import Button from '@mui/material/Button'

function SubmitButton({ handleSubmit }) {
  return (
    <div>
      <Button variant='contained' onClick={handleSubmit}>
        Lock it away
      </Button>
    </div>
  );
}

export default SubmitButton;