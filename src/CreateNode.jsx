import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

const CreateNode=(props)=> {
  const [isExpanded, setExpanded] = React.useState(false);
  const [note, setNote] = React.useState({ title: "", content: "" });

  const handleChange=(event) =>{

    const { name, value } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  const addNote=(event) => {
    props.passNote(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input name="title" onChange={handleChange} value={note.title} placeholder="Title"/>
        )}

        <textarea name="content" 
          onClick={expand} 
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={addNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateNode;