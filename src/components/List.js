import React from "react";

const List = ({ list, setList }) => {
  const onDeleteClick = (i) => {
    const newList = list.filter((item) => item !== list[i]);
    setList(newList);
    console.log(newList);
  };

  const renderList = list.map((el, i) => {
    return (
      <>
        <ul className="flex items-center justify-between">
          <li key={i} className="list-none bg-white p-2 rounded-md my-2 w-60 ">
            {el}
          </li>
          <button
            type="button"
            className=" ml-1 bg-red-600 px-1.5 py-1.5 text-white rounded-md focus:outline-none"
            onClick={() => onDeleteClick(i)}
          >
            delete
          </button>
        </ul>
      </>
    );
  });
  return (
    <div className=" mt-5 p-6 bg-green-100 max-w-sm mx-auto  shadow-sm rounded-xl ">
      {renderList}
    </div>
  );
};

export default List;
