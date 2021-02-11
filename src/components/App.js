import React, { useState } from "react";
import ChitChat from "./ChitChat";
import Button from "./Button";
import List from "./List";
import SearchBar from "./SearchBar";

const App = () => {
  const [term, setTerm] = useState("");
  const [list, setList] = useState([]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!term) return;
    setList((prevList) => [...prevList, term]);
    setTerm("");
  };

  return (
    <>
      <ChitChat />
      <form
        onSubmit={(e) => onFormSubmit(e)}
        className="flex max-w-sm mx-auto mt-5  justify-between items-center "
      >
        <SearchBar term={term} setTerm={setTerm} />
        <Button />
      </form>

      <List list={list} setList={setList} />
    </>
  );
};

export default App;
