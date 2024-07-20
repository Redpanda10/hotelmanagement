import "./Pricing.css";
import { useState } from "react";
import hotel1 from "../images/hotel1.jpeg";
import hotel2 from "../images/hotel2.jpeg";
import hotel3 from "../images/hotel3.jpeg";
import hotel4 from "../images/hotel4.jpeg";
import hotel5 from "../images/hotel5.jpeg";
import ErrorPage from "./ErrorPage";

const products = [
  {
    id: 1,
    name: "Shiva & Shanti",
    price: "Rs.500 ",
    src: hotel1,
  },
  {
    id: 2,
    name: "Hotel New Plaza",
    price: "Rs.500 ",
    src: hotel2,
  },
  {
    id: 3,
    name: "Newari ",
    price: "Rs.500 ",
    src: hotel3,
  },
  {
    id: 4,
    name: "Kalash",
    price: "Rs.500 ",
    src: hotel4,
  },
  {
    id: 5,
    name: "Hotel Sudur Paschim",
    price: "Rs.500 ",
    src: hotel5,
  },
  {
    id: 6,
    name: "New Swatik",
    price: "Rs.500 ",
    src: hotel1,
  },
  {
    id: 7,
    name: "Newari",
    price: "Rs.500 ",
    src: hotel2,
  },
  {
    id: 8,
    name: "Hotel Shiva",
    price: "Rs.500 ",
    src: hotel3,
  },
];

export default function Pricing() {
  const [count, setCount] = useState(0);
  const [fromdate, setfromDate] = useState("");
  const [todate, settoDate] = useState("");
  function clicked() {
    setCount(count + 1);
  }
  console.log(count);
  console.log(fromdate);
  console.log(todate);

  if (count == 0) {
    return (
      <>
        <div className="search">
          from
          <input
            id="date-selector"
            type="date"
            onChange={(e) => setfromDate(e.target.value)}
          />
          to
          <input
            id="date-selector"
            type="date"
            onChange={(e) => settoDate(e.target.value)}
          />
          <button className="click" onClick={clicked}>
            Search
          </button>
        </div>
      </>
    );
  } else if (count > 0 && fromdate != "" && todate != "") {
    return (
      <>
        <h1 id="heading">Hotels You might looking...</h1>
        <h1 id="heading">
          From : {fromdate} to : {todate}
        </h1>
        <div className="main">
          {products.map((hotels) => (
            <div
              className="my-card"
              key={hotels.id}
              style={{
                margin: "30px",
                padding: "20px",
                borderRadius: "50px",
              }}
            >
              <img src={hotels.src} className="image" />
              <br />
              {hotels.name}
              <br />
              {hotels.price}
              <br />
              <button className="btn-primary" onClick={clicked}>
                Book it!
              </button>
            </div>
          ))}
        </div>
      </>
    );
  } else {
    <ErrorPage />;
  }
}
