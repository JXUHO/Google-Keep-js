import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteArr, setNoteArr] = useState([]);

  function deleteNote(key) {
    let newArr = [...noteArr];
    newArr.splice(key, 1);
    setNoteArr(newArr);

    // setNoteArr((prevValue) => {
    //   prevValue.splice(key, 1);
    //   return [...prevValue];
    // });

    // let newArr = [...noteArr];
    // let resultArr = newArr.filter((value) =>
    //   value.title != newArr[key].title
    // )
    // setNoteArr(resultArr);
  }

  const noteList = noteArr.map((element, index) => (
    <Note
      key={index}
      title={element.title}
      content={element.content}
      deleteNote={() => {
        deleteNote(index);
      }}
    />
  ));

  // console.log(noteList);

  return (
    <div>
      <Header />
      <CreateArea setNoteArr={setNoteArr} />
      {noteList}
      {/* {noteArr.map((element, index) => (
        <Note
          key={index}
          title={element.title}
          content={element.content}
          deleteNote={() => {
            deleteNote(index);
          }}
        />
      ))} */}
      <Footer />
    </div>
  );
}

export default App;
