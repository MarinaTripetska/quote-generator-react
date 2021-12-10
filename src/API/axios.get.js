import axios from "axios";

export default async function API() {
  const resp = await axios.get(
    `https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd59
61f026264bb6bb3a6c41671b044f1f4/quotes.json`
  );
  return resp.data;
}
