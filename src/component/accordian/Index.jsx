import {  useState } from "react";
import { data } from "./data";
import "./App.css";

export const Accordion = () => {
  const [selected, setSelected] = useState([]);
  const [multiple, setMultiple] = useState(false);
  const [multipleSelect, ssetMultipleSelect] = useState([]);
  const handleChange = (id) => {
    console.log("click", id);
    setSelected(id === selected ? null : id);
  };

  const handleMultiple = (id) => {
    console.log(id);
    let copyMultiple = [...multipleSelect];
    const findIndexOfCurrentId = copyMultiple.indexOf(id);
    findIndexOfCurrentId == -1
      ? copyMultiple.push(id)
      : copyMultiple.splice(findIndexOfCurrentId, 1);
    ssetMultipleSelect(copyMultiple);

    console.log(copyMultiple);
  };
  return (
    <div className="wrapper">
      <button  onClick={() => setMultiple(!multiple)}> {multiple ? "Multiple"  : "Single"}  Selection</button>
      <div className="content">
        {data && data.length > 0 ? ( 
          data.map((item, i) => (
            <div key={i} className="data_item">
              <div
                className="title"
                onClick={() =>
                  multiple ? handleMultiple(item.id) : handleChange(item.id)
                }
              >
                <div>{item.question}</div>
                <span className="entities">+</span>
              </div>
              {multiple ? (
                multipleSelect.indexOf(item.id) !== -1 ? (
                  <div>{item.answer}</div>
                ) : (
                  null
                )
              ) : selected === item.id ? (
                <div>{item.answer}</div>
              ) : (
                null
              )}
            </div>
          ))
        ) : (
          <div>data not found</div>
        )}
      </div>
    </div>
  );
};
