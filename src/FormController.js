import React, { useState } from 'react'
import Box from '@mui/material/Box';
import EntryTitleInput from './EntryTitleInput';
import EntryContentInput from './EntryContentInput';
import SubmitButton from './SubmitButton';
import DatePicker from './DatePicker';

function FormController({ toggleSubmit }) {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState(formatDate(new Date()));

  function handleChange(event) {
    const inputValue = event.target.value;
    if (event.target.localName === 'input') {
      setTitle(inputValue);
    } else {
      setContent(inputValue);
    }
  }

  function handleSubmit(event) {
    const postData = {
      title,
      content,
      date
    };

    console.log(postData)
    if (!(title.trim() === "" || content.trim() === "")) {
      fetch("http://localhost:3001/entries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
      })
      setContent("");
      setTitle("");
      toggleSubmit();
    }
  }

  function formatDate(date) {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} - ${date.toLocaleTimeString()}`
  }

  function handleDateChange(date) {
    setDate(formatDate(date));
  }

  return (
    <div id="form">
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m:2 },
      }}
      noValidate 
      autoComplete="off"
      >
      <EntryTitleInput handleChange={handleChange} title={title} />
      <DatePicker handleDateChange={handleDateChange} />
      <div>
      </div>
     <EntryContentInput handleChange={handleChange} content={content} />
     <SubmitButton handleSubmit={handleSubmit} />
    </Box>
    </div>
      );    
}

export default FormController;