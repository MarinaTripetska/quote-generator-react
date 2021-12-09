import { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";

import "./App.css";
import { getRandomQuote } from "./func/getRandomQuote";
import QuoteContainer from "./components/QuoteContainer";

function App() {
  const { data, isLoading, isError, error, isSuccess } = useQuery(
    "quotes",
    async () =>
      await axios
        .get(
          `https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd59
61f026264bb6bb3a6c41671b044f1f4/quotes.json`
        )
        .then((resp) => resp.data),
    {
      retry: false,
      staleTime: 1000 * 60 * 60,
    }
  );

  const [quote, setQuote] = useState(null);

  useEffect(() => {
    if (!data) {
      return;
    }
    setQuote(getRandomQuote(data));
  }, [data]);

  if (isLoading) {
    return <h1>Quotes loading...</h1>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  if (isSuccess) {
    return (
      <main>
        <h1>SuperQuotes Page</h1>
        {quote && <QuoteContainer author={quote.author} quote={quote.quote} />}
      </main>
    );
  }
}

export default App;
