import { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";

import "./App.css";
import { getRandomQuote } from "./func/getRandomQuote";
import QuoteContainer from "./components/QuoteContainer";

const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

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
    const randomNum = getRandomNum(0, data.length - 1);
    setQuote(getRandomQuote(data, randomNum));
  }, [data]);

  const onButtonRefreshClick = () => {
    const randomNum = getRandomNum(0, data.length - 1);
    setQuote(getRandomQuote(data, randomNum));
  };

  const onButtonPrevClick = () => {
    const actQuote = data.find((q) => q.quote === quote.quote);
    if (data.indexOf(actQuote) === 0) {
      setQuote(data[data.length - 1]);
      return;
    }
    setQuote(data[data.indexOf(actQuote) - 1]);
  };

  const onButtonNextClick = () => {
    const actQuote = data.find((q) => q.quote === quote.quote);

    if (data.indexOf(actQuote) === data.length - 1) {
      setQuote(data[0]);
      return;
    }
    setQuote(data[data.indexOf(actQuote) + 1]);
  };

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
        {quote && (
          <QuoteContainer
            author={quote.author}
            quote={quote.quote}
            onButtonClick={{
              onButtonRefreshClick,
              onButtonPrevClick,
              onButtonNextClick,
            }}
          />
        )}
      </main>
    );
  }
}

export default App;
