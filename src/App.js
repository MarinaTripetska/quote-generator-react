import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import Loader from "./components/Loader";

import "./App.css";
import { getRandomQuote } from "./func/getRandomQuote";
import QuoteContainer from "./components/QuotePage";
import API from "./API/axios.get";

const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

function App() {
  const { data, isLoading, isError, error, isSuccess } = useQuery(
    "quotes",
    () => API(),
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
    return <Loader />;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  if (isSuccess) {
    return (
      <main>
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
