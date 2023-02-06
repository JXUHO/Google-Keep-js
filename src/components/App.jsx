import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteArr, setNoteArr] = useState([]);

  function deleteNote(key) {
    // var newArr = [...noteArr];
    // console.log(key)
    // newArr = newArr.splice(key, 1);
    // setNoteArr(newArr);

    setNoteArr((prevValue) => {
      // console.log(prevValue)
      prevValue.splice(key, 1);
      return [...prevValue];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea setNoteArr={setNoteArr} />
      <Note key={99} title="Note title" content="Note content" />
      {noteArr.map((element, index) => (
        <Note
          key={index}
          title={element.title}
          content={element.content}
          deleteNote={() => {
            deleteNote(index);
          }}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
