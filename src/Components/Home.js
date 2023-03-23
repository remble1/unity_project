import React, { useState, useRef } from "react";
import BannerImage from "../Assets/santa_dh.png"

function Home() {
  const [message, setMessage] = useState("");
  const [price, setPrice] = useState("");
  const [response, setResponse] = useState("");
  const ref = useRef(null);
  const ref1 = useRef(null);


  const handleChange = (e) => {
    const result = e.target.value.replace(/\D/g, "");
    setPrice(result);
  };

  const handleMessage = (e) => {
    const result = e.target.value
    setMessage(result)
  }

  const clear_result = (e) => {
    ref1.current?.scrollIntoView({behavior: 'smooth'});
    setResponse("")
    setPrice("")
    setMessage("")
  }

  const handleSubmit = (e) => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
    e.preventDefault();
    fetch("http://34.240.1.226:3001/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message, price }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message));
  };

  function hangleResponse(res) {
    if (res) {
      console.log(res);
      let productList = JSON.parse(res);
      return (
        <ol>
          {productList.map((product) => (
            <li>{product}</li>
          ))}
        </ol>
      );
    }
  }

  return (
    <div ref={ref1} className="home-container">
      <div >
        <div className="banner">
          <div className="banner-text">You don't want to buy a pig in a poke? Neither do we. Ask around for honest reviews.</div>
          <div className="banner-img"><img src={BannerImage} alt="mountain bike"/>
      </div>
      <div className="block"></div>
      </div>
      
      <div className="user-panel">

          <div>
            <input 
              className="user-product"
              type="text"
              placeholder="Product name"
              value={message}
              onChange={handleMessage}
            />
          </div>

          <div>
            <input
              className="user-price"
              type="text"
              placeholder="Max price $"
              value={price}
              onChange={handleChange}
            />
          </div>

          <div>
            <button 
              disabled={!message}
              onClick={handleSubmit}
              className="user-button"
            >Submit</button>
          </div>

      </div>

        <div
        className="user-response"
        >
          <div>Someone's lucky! Look what we found:</div>
          <div className="result-list">
          {hangleResponse(response)}
          </div>
        </div>
        <div
        ref={ref} 
        >
          <button 
          className="clear-result"
          type="submit" 
          onClick={() => clear_result()}>
          Clear result
          </button>
        </div>

      </div>
    </div>
  );
}

export default Home;

