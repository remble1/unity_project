// back
const OpenAI = require("openai");
const { Configuration, OpenAIApi } = OpenAI;

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;
require("dotenv").config();

const configuration = new Configuration({
  organization: "org-4b29loSrpWnPgqRFqvwApwEb",
  apiKey: process.env.REACT_GPT_KEY,
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {
  const { message } = req.body;
  const { price } = req.body;

  console.log(message, price);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `What is the best ${message} based on the opinions of reddit users under ${price} dolars. 
        Answer in the form of a three diffrent things in javascript list.
        If the price is too low and you can't find anything then answer in the form of a one-item list "null"`,
    max_tokens: 50,
    temperature: 0,
  });
  console.log(response.data);
  if (response.data.choices[0].text) {
    res.json({
      message: response.data.choices[0].text,
    });
  }
});

app.listen(port, () => {
  console.log("Example app listening");
});
