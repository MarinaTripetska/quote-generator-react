const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getRandomQuote = (data) => {
  const randomNum = getRandomNum(0, data.length - 1);

  const quote = data.find((q, indx) => {
    return indx === randomNum ?? q;
  });
  return quote;
};
