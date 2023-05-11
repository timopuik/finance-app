import React, { useState } from "react";

const SearchForm = ({ onSubmit }: { onSubmit: (symbol: string) => void }) => {
    const [symbol, setSymbol] = useState("");

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(symbol);
};

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSymbol(event.target.value);
};

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Symbol:
        <input type="text" value={symbol} onChange={handleChange} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
