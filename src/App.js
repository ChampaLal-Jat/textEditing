
import './App.css';

import Navbar from './components/Navbar'

import Form from './components/Form'
// import About from './components/About';
import Alert from './components/Alert'

import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Route,
// } from "react-router-dom";


// import {
//   Switch,
// } from "react-router";

function App() {
  const [mode, setMode] = useState('light') // Whether dark mode is enabled or not
  const [alert,setAlert]=useState(null);
  const [txtCol, settxtCol] = useState(null);

  const  showAlert = (message,type)=>{

    setAlert({
      msg: message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null);
    },2000)
  
  }

  const toggleMode = ()=>{

    if(mode === 'light'){
      setMode('dark');
      showAlert("Dark mode has been enabled","success");
      document.body.style.backgroundColor = '#042743';
      settxtCol('white');
      document.title = 'TextUtils-Dark Mode'
    }
    else{
      document.body.style.backgroundColor = 'white';
      setMode('light');
      showAlert("Light mode has been enabled","success");
      settxtCol('blue');
      document.title = 'TextUtils-Light Mode';
    }
  }

  return (
  <>
  {/* <Router> */}
    {/* <Navbar title="TextUtils" aboutTxt="About Us"/> \*/}

    <Navbar title="TextUtils" aboutTxt="About" mode={mode} toggleMode={toggleMode} />

    <Alert alert={alert}/>

    <div className="conianer my-3">
    {/* <Switch> */}
          {/* <Route exact path="/about"> */}
          {/* <About/> */}
          {/* </Route> */}

          {/* <Route exact path="/"> */}
          <Form showAlert={showAlert} mode={mode} txtCol={txtCol} heading="Enter the text to analyze"/>
          {/* </Route> */}

    {/* </Switch>  */}
    </div>
  {/* </Router> */}
  
  </>
  );
}

export default App;
