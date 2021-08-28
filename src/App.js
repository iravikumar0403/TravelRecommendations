import { useState } from "react";
import "./styles.css";
import { data } from "./data";

export default function App() {
  const [region, setRegion] = useState("South India");

  function buttonClickhandler(region) {
    setRegion(region);
  }
  return (
    <div className="App">
      <h1 className="heading">Places to visit in India</h1>
      <p className="sub">
        Select the region you wish to visit to get the list of 5 best Tourist
        Places and Attractions
      </p>
      <div className="btn-wrapper">
        {Object.keys(data).map((item) => {
          return region === item ? (
            <button
              className="btn-group btn-active"
              key={item}
              onClick={() => buttonClickhandler(item)}
            >
              {item}
            </button>
          ) : (
            <button
              className="btn-group"
              key={item}
              onClick={() => buttonClickhandler(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <ul className="list">
        {data[region].map((item) => {
          return (
            <li className="list-item" key={item.name}>
              <img className="thumbnail" src={item.image} alt={item.name} />
              <div className="details">
                <h2 className="name">{item.name}</h2>
                <p className="desc-txt">{item.desc}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
