import React, { useState } from "react";
import BannerImage from "../Assets/santa_dh.png"

function Home() {
  const [message, setMessage] = useState("");
  const [price, setPrice] = useState("");
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    const result = e.target.value.replace(/\D/g, "");
    setPrice(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/", {
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
    <div className="home-container">
      <div>
      <div className="banner">
      <div className="banner-text">I'm not an expert, but I'm really need it</div>
      <div className="banner-img"><img src={BannerImage}/>
      </div>
      <div className="block" > I'm red huge boy </div>
      </div>
        <div>
        <form onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <input
            type="text"
            placeholder="Max price"
            value={price}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        </div>

        <div>We have proposition for you:</div>
        <div>{hangleResponse(response)}</div>
        <button type="submit" onClick={() => setResponse("")}>
          Clear result
        </button>
      </div>
    </div>
  );
}

export default Home;
