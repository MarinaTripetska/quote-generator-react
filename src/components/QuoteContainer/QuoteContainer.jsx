import Button from "../Button";

export default function QuoteContainer({ author, quote }) {
  return (
    <div>
      {" "}
      <p>Name: {author}</p>
      <p>Quote: {quote}</p>
      <Button name="prev" type="button">
        Prev
      </Button>
      <Button name="refresh" type="button">
        Refresh
      </Button>
      <Button name="next" type="button">
        Next
      </Button>
    </div>
  );
}
