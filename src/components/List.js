import React, { useState } from "react";
import EditingTemplate from "./EditingTemplate";
import ViewTemplate from "./ViewTemplate";

const List = ({ listValue, setList }) => {
  const [isEditing, setEditing] = useState(false);

  return (
    <div className=" mt-5 p-6 bg-indigo-300 max-w-sm mx-auto shadow-sm rounded-xl ">
      <div>
        {isEditing ? (
          <EditingTemplate
            listValue={listValue}
            isEditing={isEditing}
            setEditing={setEditing}
          />
        ) : (
          <ViewTemplate
            listValue={listValue}
            setList={setList}
            isEditing={isEditing}
            setEditing={setEditing}
          />
        )}
      </div>
    </div>
  );
};

export default List;
