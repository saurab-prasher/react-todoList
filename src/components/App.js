import React, { useState } from "react";
import Header from "./Header";
import Button from "./Button";
import ViewTemplate from "./ViewTemplate";
import SearchBar from "./SearchBar";

const App = () => {
  const [term, setTerm] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setEditing] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!term) return;
    setList((prevList) => [...prevList, term]);
    setTerm("");
  };

  return (
    <>
      <Header />
      <form
        onSubmit={(e) => onFormSubmit(e)}
        className="flex max-w-sm mx-auto mt-5  justify-between items-center "
      >
        <SearchBar term={term} setTerm={setTerm} />
        <Button />
      </form>

      <ViewTemplate
        isEditing={isEditing}
        setEditing={setEditing}
        list={list}
        setList={setList}
      />
    </>
  );
};

export default App;
