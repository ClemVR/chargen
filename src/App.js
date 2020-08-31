import React, { useState } from 'react';
import './Base.css';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

function App() {
  const [id, setId] = useState({
    name: '',
    surname: '',
    age: '',
    phone: '',
    email: '',
  });
    //Having difficulties grasping how states work, especially with hooks

  function getData() {
    return new axios("https://api.randomuser.me/?nat=FR&results=1");
  }
    //Get the datas from the API

  function onClick() {
    getData().then(({ data }) => {
      //Get the datas from API, but only return what's on data
      const person0 = data?.results?.[0];
      

      if (person0) {
        setId({
          name: person0?.name?.last ? person0?.name?.last : 'n/a',
          surname: person0?.name?.first ? person0?.name?.first : 'n/a',
          age: person0?.dob?.age ? person0?.dob?.age : 'n/a',
          phone: person0?.phone ? person0?.phone : 'n/a',
          email: person0?.email ? person0?.email : 'n/a',
        });
      }

    });

  };
  return (
    <div className="App">
      <div className="Card">
        <div className="Generated">
          <ul className="Generated-user">
            <li className="Name">Name: {id.name}</li>
            <li className="Surname">Surname: {id.surname}</li>
            <li className="Age">Age: {id.age}</li>
            <li className="Phone">Phone: {id.phone}</li>
            <li className="Email">Email: {id.email}</li>
          </ul>
        </div>
        <div className="User-input">
          <h1>Generate a new user!</h1>
          <Button onClick={onClick} className="Button-app" variant="contained" color="primary">GO!</Button>
        </div>
      </div>
          <div className="Form">
          <form>
          <TextField id="form-textfield" fullWidth="true"></TextField>
          <Button value="email" id="Button-form" variant="outlined" color="secondary" size="medium">Subscribe</Button>
          </form>
          </div>
    </div>
  );
}

export default App;
