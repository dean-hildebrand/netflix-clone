import React, { useState, useEffect } from "react";
import "../css/row.css";
import axios from '../axios'

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
      async function fetchData() {
        const request = await axios.get(fetchURL);
        setMovies(request.data.results);
        return request
      }
      fetchData()

  }, [fetchURL])

  return (
    <div className="row">
      <h2>{title}</h2>
    </div>
  );
}

export default Row;
