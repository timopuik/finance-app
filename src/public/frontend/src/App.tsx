import { useState } from "react";
import SearchForm from "./SearchForm";
import './App.css';

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (symbol: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/quotes/${symbol}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }, });
      if (!response.ok) {
        throw new Error("Error fetching stock data");
      }
      const responseData = await response.json();

      const { quote: quoteData } = responseData;
      setData(quoteData);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Error fetching stock data");
      setData(null);
    }
  };

  return (
    <div>
      <SearchForm onSubmit={handleSearch} />
      {error && <p>{error}</p>}
      {data && (
        <ul>
          <li>Symbol: {data["01. symbol"]}</li>
          <li>Open: {data["02. open"]}</li>
          <li>High: {data["03. high"]}</li>
          <li>Low: {data["04. low"]}</li>
          <li>Price: {data["05. price"]}</li>
          <li>Volume: {data["06. volume"]}</li>
          <li>Latest Trading Day: {data["07. latest trading day"]}</li>
          <li>Previous Close: {data["08. previous close"]}</li>
          <li>Change: {data["09. change"]}</li>
          <li>Change Percent: {data["10. change percent"]}</li>
        </ul>
      )}
    </div>
  );
};

export default App;
