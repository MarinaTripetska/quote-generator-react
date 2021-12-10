import Button from "../Button";

export default function QuoteContainer({
  author,
  quote,
  onButtonClick: { onButtonRefreshClick, onButtonPrevClick, onButtonNextClick },
}) {
  return (
    <div>
      {" "}
      <p>Name: {author}</p>
      <p>Quote: {quote}</p>
      <Button name="prev" type="button" onClick={onButtonPrevClick}>
        Prev
      </Button>
      <Button name="refresh" type="button" onClick={onButtonRefreshClick}>
        Refresh
      </Button>
      <Button name="next" type="button" onClick={onButtonNextClick}>
        Next
      </Button>
    </div>
  );
}
