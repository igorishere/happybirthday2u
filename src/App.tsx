import React from 'react';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <div className='buttonContainer'>
        <Button variant="contained">
          <Link to={`happybirthday2you`}>
            CLIQUE PARA
            <br />
            RECEBER PARABÉNS
          </Link>
        </Button> 
      </div>
    </>
  );
}

export default App;
