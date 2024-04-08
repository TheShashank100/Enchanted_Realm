import React, { useState, useEffect } from "react";

function QuoteGenerator() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const generateQuote = async () => {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    const randomIdx = Math.floor(Math.random() * data.length);
    const quoteText = data[randomIdx].text;
    const auth = data[randomIdx].author || "Anonymous";
    setQuote(quoteText);
    setAuthor(auth);
  };

  useEffect(() => {
    generateQuote();
  }, []);

  return (
    <div class="boxSize">
      <h1>{quote}</h1>
      <p>{author}</p>
      <button class="button" onClick={generateQuote}>
        New Quote
      </button>
    </div>
  );
}

export default QuoteGenerator;
