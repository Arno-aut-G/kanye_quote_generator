import React, { useState, useEffect } from "react";
import KanyeGif from "./components/KanyeGif";
import "./styles.css";
import Axios from 'axios';
import Quote from './components/Quote';
import * as ReactBootstrap from 'react-bootstrap';

const App = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorIn, setErrorIn] = useState('')

  const cutData = () => {
    if (data.length > 11) {
      setData(data.slice(0, 11))
    }
  }


  const fetchData = async () => {
    await Axios.get(`https://api.kanye.rest/`)
      .then(response => {
        setData((prev) => [response.data.quote, ...prev]);
        setLoading(false)
      })
      .catch(error => setErrorIn(error.message)) //setErrorIn with error.message here

  }


  console.log(data)

  useEffect(() => {
    setErrorIn('');
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 10000)
    return () => clearInterval(interval);
  }, [])

  return (
    <>
      {errorIn ? <h2>There was a problem loading a Kanye quote, please try again later</h2> : loading ? <h3>Loading...</h3> : <Quote data={data} cutData={cutData} />}

    </>
  );
};

export default App;
