import React, { useState } from "react";
import GeoChart from "./GeoChart";
import data from "./GeoChart.world.geo.json";
import "./App.css";
import { Typography } from "@material-ui/core";

function App() {
  const [property, setProperty] = useState("pop_est");
  return (
    <React.Fragment>
      <Typography className="Typo" variant="h4" color="secondary">
        World Map with d3-geo
      </Typography>
      <br />
      <GeoChart data={data} property={property} />
      <Typography className="Typo" variant="h6" color="primary">
        Select property to highlight
      </Typography>
      <select
        value={property}
        onChange={(event) => setProperty(event.target.value)}
      >
        <option value="pop_est">Population</option>
        <option value="name_len">Name length</option>
        <option value="gdp_md_est">GDP</option>
      </select>
    </React.Fragment>
  );
}

export default App;
