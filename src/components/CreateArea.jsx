import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const inputValue = event.target.value;

    if (event.target.name === "title") {
      // setNote((prevValue) => ({
      //   ...prevValue,
      //   title: inputValue
      // }));

      let temp = {...note}
      temp.title = inputValue;
      setNote(temp);

    } else if (event.target.name === "content") {
      setNote((prevValue) => ({
        ...prevValue,
        content: inputValue
      }));
    }
  }

  function handleClick(event) {
    event.preventDefault();  // prevent refreshing caused by form tag 
    props.setNoteArr((prevValue) => {
      return [...prevValue, note];
    });
    setNote({ title: "", content: "" });
  }

  return (
    <div>
      <form>
        <input
          value={note.title}
          onChange={handleChange}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={note.content}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
