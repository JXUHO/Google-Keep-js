import React, { useState } from "react";
import { PlusLg } from 'react-bootstrap-icons';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [expanded, setExpanded] = useState(false);

  function handleChange(event) {
    const inputValue = event.target.value;

    if (event.target.name === "title") {
      // setNote((prevValue) => ({
      //   ...prevValue,
      //   title: inputValue
      // }));

      let temp = { ...note };
      temp.title = inputValue;
      setNote(temp);
    } else if (event.target.name === "content") {
      setNote((prevValue) => ({
        ...prevValue,
        content: inputValue,
      }));
    }
  }

  function handleClick(event) {
    console.log("hi");
    event.preventDefault(); // prevent refreshing caused by form tag
    props.setNoteArr((prevValue) => {
      return [...prevValue, note];
    });
    setNote({ title: "", content: "" });
    setExpanded(false);
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form>
        {expanded && (
          <input
            value={note.title}
            onChange={handleChange}
            name="title"
            placeholder="Title"
          />
        )}

        <textarea
          value={note.content}
          onClick={expand}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={expanded ? "3" : "1"}
        />
        {expanded && <button onClick={handleClick}><PlusLg size={20}/></button>}
      </form>
    </div>
  );
}

export default CreateArea;
