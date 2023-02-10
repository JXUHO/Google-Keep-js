import React from "react";
import { Trash } from 'react-bootstrap-icons';

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={props.deleteNote}><Trash size={20}/></button>
    </div>
  );
}

export default Note;
