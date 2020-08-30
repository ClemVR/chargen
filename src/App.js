import React, { useState } from 'react';
import './Base.css';
import './App.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';

function App() {
  const [call, makeCall] = useState(0);
  const url = "https://api.randomuser.me/?nat=FR&results=1";


  return (
    <div className="App">
     <div className="Card">
      <div className="Generated">
        <ul className="Generated-user">
          <li className="Name">Name:</li>
          <li className="Surname">Surname:</li>
          <li className="Age">Age:</li>
          <li className="Phone">Phone:</li>
          <li className="Email">Email:</li>
        </ul>
      </div>
      <div className="User-input">
        <h1>Generate a new user!</h1>
        <Button onClick={() => axios(url).then(response => console.log(response))} variant="contained" color="primary">GO!</Button>
      </div>
     </div>
    </div>
  );
}

export default App;
